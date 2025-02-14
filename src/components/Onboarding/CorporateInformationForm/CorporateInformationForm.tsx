import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  useTheme,
  RadioGroup,
  Stack,
  Radio,
  Button,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputMask from "react-input-mask";
import { corporateInformationFormSchema } from "./corporateInformationFormSchema";
import AllDataForm from "../../../utils/AllDataForm";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import AddressInput from "../../FormComponents/AddressInput";
import { handleMaxInput } from "../../../utils/MaxLengthInput";

type BusinessDataForm = z.infer<typeof corporateInformationFormSchema>;

interface CorporateInfomationFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof corporateInformationFormSchema;
  formDataAll?: AllDataForm;
}

const CorporateInformationForm: React.FC<CorporateInfomationFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    corpLegalFedTaxId: "",
    corpLegalName: "",
    corpLegalAddress: {
      address: "",
      city: "",
      state: "",
      zip: "",
    },
    corpLegalPhone: "",
    corpLegalEmail: "",
    yearsInBusiness: 0,
    aditionalDetailsLocations: 0,
    aditionalDetailsWebsite: "",
    aditionalDetailsMailing: "",
  },
  validationSchema = corporateInformationFormSchema,
  formRef,
}) => {
  const theme = useTheme();
  const methods = useForm<BusinessDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });

  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<BusinessDataForm> = (data) => {
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  const handleDebug = () => {
    const values = getValues();
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <HStack spacing={4} mb={4}>
          <FormControl mb={4} isInvalid={!!errors.corpLegalFedTaxId}>
            <FormLabel htmlFor="corpLegalFedTaxId">
              Federal Tax ID (EIN)
            </FormLabel>
            <Input
              as={InputMask}
              mask="**-*******"
              maskChar={null}
              id="corpLegalFedTaxId"
              type="text"
              placeholder="Enter your federal tax ID"
              {...methods.register("corpLegalFedTaxId")}
            />
            <ErrorMessage error={errors.corpLegalFedTaxId?.message} />
          </FormControl>
          <FormControl mb={4} isInvalid={!!errors.yearsInBusiness}>
            <FormLabel htmlFor="yearsInBusiness">Years in Business</FormLabel>
            <Input
              maxLength={3}
              id="yearsInBusiness"
              type="number"
              onInput={(e) => handleMaxInput(e, 3)}
              placeholder="Enter your years in business"
              {...methods.register("yearsInBusiness")}
            />
            <ErrorMessage error={errors.yearsInBusiness?.message} />
          </FormControl>
        </HStack>

        <HStack spacing={4} mb={4}>
          <FormControl mb={4} isInvalid={!!errors.corpLegalName}>
            <FormLabel htmlFor="legalName" color={theme.colors.gray[700]}>
              Legal Name
            </FormLabel>
            <Input
              id="legalName"
              type="text"
              placeholder="Enter your legal name"
              {...methods.register("corpLegalName")}
            />
            <ErrorMessage error={errors.corpLegalName?.message} />
          </FormControl>
        </HStack>

        <HStack spacing={4} mb={4}>
          <FormControl isInvalid={!!errors.corpLegalPhone}>
            <FormLabel htmlFor="corpLegalPhone" color={theme.colors.gray[700]}>
              Legal Phone
            </FormLabel>
            <Input
              id="corpLegalPhone"
              type="number"
              onInput={(e) => handleMaxInput(e, 10)}
              placeholder="Enter your Legal Phone"
              {...methods.register("corpLegalPhone")}
            />
            <ErrorMessage error={errors.corpLegalPhone?.message} />
          </FormControl>

          <FormControl isInvalid={!!errors.corpLegalEmail}>
            <FormLabel htmlFor="corpLegalEmail" color={theme.colors.gray[700]}>
              Legal Email
            </FormLabel>
            <Input
              id="corpLegalEmail"
              type="text"
              placeholder="Enter your your company / legal email"
              {...methods.register("corpLegalEmail")}
            />
            <ErrorMessage error={errors.corpLegalEmail?.message} />
          </FormControl>
        </HStack>

        <AddressInput
          name="corpLegalAddress"
          label="Legal Address"
          placeholder="Enter your legal address"
          error={errors.corpLegalAddress?.address}
        />

        <HStack spacing={4} mb={4}>
          <FormControl mb={4} isInvalid={!!errors.aditionalDetailsLocations}>
            <FormLabel htmlFor="aditionalDetailsLocations">
              Number of Locations
            </FormLabel>
            <Input
              id="aditionalDetailsLocations"
              type="number"
              onInput={(e) => handleMaxInput(e, 3)}
              placeholder="Enter the number of locations"
              {...methods.register("aditionalDetailsLocations")}
            />
            <ErrorMessage error={errors.aditionalDetailsLocations?.message} />
          </FormControl>

          <FormControl mb={4} isInvalid={!!errors.aditionalDetailsWebsite}>
            <FormLabel htmlFor="aditionalDetailsWebsite">
              Website address
            </FormLabel>
            <Input
              id="aditionalDetailsWebsite"
              type="text"
              placeholder="Enter your website address"
              {...methods.register("aditionalDetailsWebsite")}
            />
            <ErrorMessage error={errors.aditionalDetailsWebsite?.message} />
          </FormControl>
        </HStack>

        <FormControl mb={4} isInvalid={!!errors.aditionalDetailsMailing}>
          <FormLabel>Mailing Address</FormLabel>
          <RadioGroup
            value={formData.aditionalDetailsMailing}
            onChange={(value) => setValue("aditionalDetailsMailing", value)}
          >
            <Stack direction="column">
              <Radio
                value="corporate"
                {...methods.register("aditionalDetailsMailing")}
              >
                Corporate / Legal Name
              </Radio>
              <Radio
                value="dba"
                {...methods.register("aditionalDetailsMailing")}
              >
                DBA
              </Radio>
            </Stack>
          </RadioGroup>
          <ErrorMessage error={errors.aditionalDetailsMailing?.message} />
        </FormControl>

        {/* Boton para poder ver los campos en el clg comentar o descomentar */}
        {/* <Button onClick={handleDebug} colorScheme="blue" mb={4}>
          Debug
        </Button> */}
      </Box>
    </FormProvider>
  );
};

export default CorporateInformationForm;
