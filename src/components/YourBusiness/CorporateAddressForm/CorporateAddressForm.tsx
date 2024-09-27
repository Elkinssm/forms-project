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
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputMask from "react-input-mask";

const schema = z.object({
  corpLegalFedTaxId: z
    .string()
    .min(6, "The fed tax id must be at least 6 characters long"),
  corpLegalName: z.string().min(5, { message: "Name is required" }),
  corpLegalAddress: z.string().min(5, { message: "Address is required" }),
  corpLegalCity: z.string().min(1, { message: "City is required" }),

  corpLegalState: z.string().min(1, { message: "State is required" }),
  corpLegalZip: z.string().min(5, { message: "ZIP code must be at least 5 characters long" }),
  corpLegalPhone: z.string().min(10, "The phone number must be at least 10 characters long"),
  corpLegalEmail: z.string().email("A valid email is required"),

});

type BusinessDataForm = z.infer<typeof schema>;

interface CorporateAddressFormProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
}

const CorporateAddressForm: React.FC<CorporateAddressFormProps> = ({
  title,
  onNext,
  onDataChange,
  formData = { corpLegalFedTaxId: "", corpLegalName: "", corpLegalAddress: "", corpLegalCity: "", corpLegalState: "", corpLegalZip: "", corpLegalPhone: "", corpLegalEmail: "" },
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
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <Text fontWeight="bold" fontSize="2xl" mb={4} color="text.highEmphasis">
        {title}
      </Text>
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

      <FormControl mb={4} isInvalid={!!errors.corpLegalName}>
        <FormLabel htmlFor="legalName" color={theme.colors.gray[700]}>
          Corporate / Legal Name
        </FormLabel>
        <Input
          id="legalName"
          type="text"
          placeholder="Enter your corporate / legal name"
          {...register("corpLegalName")}
        />
        {errors.corpLegalName && (
          <Text color={"semantic.error.DEFAULT"}>{errors.corpLegalName.message}</Text>
        )}
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.corpLegalAddress}>
        <FormLabel htmlFor="corpLegalAddress" color={theme.colors.gray[700]}>
          Corporate / Legal Address
        </FormLabel>
        <Input
          id="address"
          type="text"
          placeholder="Enter your corporate / legal address"
          {...register("corpLegalAddress")}
        />
        {errors.corpLegalAddress && (
          <Text color={"semantic.error.DEFAULT"}>{errors.corpLegalAddress.message}</Text>
        )}
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.corpLegalCity}>
        <FormLabel htmlFor="corpLegalCity" color={theme.colors.gray[700]}>
          Corporate / Legal City
        </FormLabel>
        <Select id="corpLegalCity" placeholder="Select your company / legal city" {...register("corpLegalCity")}>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </Select>
        {errors.corpLegalCity && (
          <Text color={"semantic.error.DEFAULT"}>{errors.corpLegalCity.message}</Text>
        )}
      </FormControl>

      <HStack spacing={4} mb={4}>
        <FormControl isInvalid={!!errors.corpLegalState}>
          <FormLabel htmlFor="corpLegalState" color={theme.colors.gray[700]}>
            Corporate / Legal State
          </FormLabel>
          <Select id="corpLegalState" placeholder="Select your company / legal state" {...register("corpLegalState")}>
            <option value="NY">New York</option>
            <option value="CA">California</option>
            <option value="IL">Illinois</option>
          </Select>
          {errors.corpLegalState && (
            <Text color={"semantic.error.DEFAULT"}>{errors.corpLegalState.message}</Text>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.corpLegalZip}>
          <FormLabel htmlFor="corpLegalZip" color={theme.colors.gray[700]}>
            Corporate / Legal ZIP Code
          </FormLabel>
          <Input
            id="corpLegalZip"
            type="text"
            placeholder="Enter your company / legal ZIP code"
            {...register("corpLegalZip")}
          />
          {errors.corpLegalZip && (
            <Text color={"semantic.error.DEFAULT"}>{errors.corpLegalZip.message}</Text>
          )}
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl isInvalid={!!errors.corpLegalPhone}>
          <FormLabel htmlFor="corpLegalPhone" color={theme.colors.gray[700]}>
            Corporate / Legal Phone
          </FormLabel>
          <Input
            id="corpLegalPhone"
            type="text"
            placeholder="Enter your Corporate / Legal Phone"
            {...register("corpLegalPhone")}
          />
          {errors.corpLegalPhone && (
            <Text color={"semantic.error.DEFAULT"}>{errors.corpLegalPhone.message}</Text>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.corpLegalEmail}>
          <FormLabel htmlFor="corpLegalEmail" color={theme.colors.gray[700]}>
            Corporate / Legal Email
          </FormLabel>
          <Input
            id="corpLegalEmail"
            type="text"
            placeholder="Enter your your company / legal email"
            {...register("corpLegalEmail")}
          />
          {errors.corpLegalEmail && (
            <Text color={"semantic.error.DEFAULT"}>{errors.corpLegalEmail.message}</Text>
          )}
        </FormControl>
      </HStack>
    </Box>
  );
};

export default CorporateAddressForm;
