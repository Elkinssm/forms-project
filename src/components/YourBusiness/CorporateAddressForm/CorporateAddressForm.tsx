import React from "react";
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
  Checkbox,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputMask from "react-input-mask";
import ZipInput from "../../FormComponents/ZipInputField";

const schema = z.object({
  corpLegalFedTaxId: z
    .string()
    .min(6, "The fed tax id must be at least 6 characters long"),
  corpLegalName: z.string().min(5, { message: "Name is required" }),
  corpLegalAddress: z.string().min(5, { message: "Address is required" }),
  corpLegalCity: z.string().min(1, { message: "City is required" }),

  corpLegalState: z.string().min(1, { message: "State is required" }),
  corpLegalZip: z
    .string()
    .min(5, { message: "ZIP code must be at least 5 characters long" }),
  corpLegalPhone: z.preprocess(
    (val) => Number(val),
    z.number().min(10, "The phone number must be at least 10 characters long")
  ),


  corpLegalEmail: z.string().email("A valid email is required"),
  controllerOfficerIsOwner: z.boolean(),


});

type BusinessDataForm = z.infer<typeof schema>;

interface CorporateAddressFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
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
    corpLegalPhone: 0,
    corpLegalEmail: "",
    controllerOfficerIsOwner: false,
  },
  formRef,
}) => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<BusinessDataForm> = (data) => {
    console.log(data);
    debugger
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
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
        {errors.corpLegalFedTaxId && (
          <Text color="semantic.error.DEFAULT">
            {errors.corpLegalFedTaxId.message}
          </Text>
        )}
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
          {errors.corpLegalName && (
            <Text color={"semantic.error.DEFAULT"}>
              {errors.corpLegalName.message}
            </Text>
          )}
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
          {errors.corpLegalPhone && (
            <Text color={"semantic.error.DEFAULT"}>
              {errors.corpLegalPhone.message}
            </Text>
          )}
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
          {errors.corpLegalEmail && (
            <Text color={"semantic.error.DEFAULT"}>
              {errors.corpLegalEmail.message}
            </Text>
          )}
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
        {errors.corpLegalAddress && (
          <Text color={"semantic.error.DEFAULT"}>
            {errors.corpLegalAddress.message}
          </Text>
        )}
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
        {errors.corpLegalCity && (
          <Text color={"semantic.error.DEFAULT"}>
            {errors.corpLegalCity.message}
          </Text>
        )}
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
          {errors.corpLegalState && (
            <Text color={"semantic.error.DEFAULT"}>
              {errors.corpLegalState.message}
            </Text>
          )}
        </FormControl>

        <ZipInput
          label="Legal ZIP Code"
          id="corpLegalZip"
          errors={errors}
          register={register}
        />
      </HStack>

      <Text fontSize="xl">DBA</Text>
      <FormControl mb={4} isInvalid={!!errors.controllerOfficerIsOwner}>
        <HStack spacing={4} mb={4}>
          <FormLabel htmlFor="controllerOfficerTitle">
            Same Infomation as Legal
          </FormLabel>
          <Checkbox
            id="controllerOfficerIsOwner"
            {...register("controllerOfficerIsOwner")}
          />
          {errors.controllerOfficerIsOwner && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerIsOwner.message}
            </Text>
          )}
        </HStack>
      </FormControl>
    </Box>
  );
};

export default CorporateAddressForm;
