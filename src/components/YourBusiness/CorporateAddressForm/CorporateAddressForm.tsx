import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  HStack,
  useTheme,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputMask from "react-input-mask";
import ZipInput from "../../FormComponents/ZipInputField";
import { corporateAddresFormSchema } from "./corporateAddresFormSchema";
import AllDataForm from "../../../utils/AllDataForm";
import ReusableCheckbox from "../../FormComponents/ReusableCheckbox";
import ErrorMessage from "../../FormComponents/ErrorMessage";

type BusinessDataForm = z.infer<typeof corporateAddresFormSchema>;

interface CorporateAddressFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof corporateAddresFormSchema;
  formDataAll?: AllDataForm;
}

const CorporateAddressForm: React.FC<CorporateAddressFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    corpLegalFedTaxId: "",
    corpLegalName: "",
    corpLegalAddress: "",
    corpLegalCity: "",
    corpLegalState: "",
    corpLegalZip: "",
    corpLegalPhone: "",
    corpLegalEmail: "",
    controllerOfficerIsOwner: "no",
  },
  validationSchema = corporateAddresFormSchema,
  formRef,
  // formDataAll,
}) => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<BusinessDataForm> = (data) => {
    console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  useEffect(() => {
    // Si la data cargada tiene el valor "yes", marcar el checkbox
    if (formData?.controllerOfficerIsOwner === "yes") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [formData?.controllerOfficerIsOwner]);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    // Actualiza el valor del checkbox en el formulario
    setValue("controllerOfficerIsOwner", checked ? "yes" : "no");
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <FormControl mb={4} isInvalid={!!errors.corpLegalFedTaxId}>
        <FormLabel htmlFor="corpLegalFedTaxId">Federal Tax ID (EIN)</FormLabel>
        <Input
          as={InputMask}
          mask="**-*******"
          maskChar={null}
          id="corpLegalFedTaxId"
          type="text"
          placeholder="Enter your federal tax ID"
          {...register("corpLegalFedTaxId")}
        />
        <ErrorMessage error={errors.corpLegalFedTaxId?.message} />
      </FormControl>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.corpLegalName}>
          <FormLabel htmlFor="legalName" color={theme.colors.gray[700]}>
            Legal Name
          </FormLabel>
          <Input
            id="legalName"
            type="text"
            placeholder="Enter your legal name"
            {...register("corpLegalName")}
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
            placeholder="Enter your Legal Phone"
            {...register("corpLegalPhone")}
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
            {...register("corpLegalEmail")}
          />
          <ErrorMessage error={errors.corpLegalEmail?.message} />
        </FormControl>
      </HStack>

      <FormControl mb={4} isInvalid={!!errors.corpLegalAddress}>
        <FormLabel htmlFor="corpLegalAddress" color={theme.colors.gray[700]}>
          Legal Address
        </FormLabel>
        <Input
          id="address"
          type="text"
          placeholder="Enter your legal address"
          {...register("corpLegalAddress")}
        />
        <ErrorMessage error={errors.corpLegalAddress?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.corpLegalCity}>
        <FormLabel htmlFor="corpLegalCity" color={theme.colors.gray[700]}>
          Legal City
        </FormLabel>
        <Select
          id="corpLegalCity"
          placeholder="Select your company / legal city"
          {...register("corpLegalCity")}
        >
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </Select>
        <ErrorMessage error={errors.corpLegalCity?.message} />
      </FormControl>

      <HStack spacing={4} mb={4}>
        <FormControl isInvalid={!!errors.corpLegalState}>
          <FormLabel htmlFor="corpLegalState" color={theme.colors.gray[700]}>
            Legal State
          </FormLabel>
          <Select
            id="corpLegalState"
            placeholder="Select your company / legal state"
            {...register("corpLegalState")}
          >
            <option value="NY">New York</option>
            <option value="CA">California</option>
            <option value="IL">Illinois</option>
          </Select>
          <ErrorMessage error={errors.corpLegalState?.message} />
        </FormControl>

        <ZipInput
          label="Legal ZIP Code"
          id="corpLegalZip"
          errors={errors}
          register={register}
        />
      </HStack>

      <Text fontSize="xl">DBA</Text>
      <FormControl>
        <HStack alignItems={"center"}>
          <ReusableCheckbox
            id="controllerOfficerIsOwner"
            label="Same Information as Legal"
            isChecked={isChecked}
            onChange={handleCheckboxChange}
            register={register}
            error={errors.controllerOfficerIsOwner}
          />
        </HStack>
      </FormControl>
    </Box>
  );
};

export default CorporateAddressForm;
