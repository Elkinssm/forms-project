import { Box, HStack, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  businessProfileOwnershipType: z
    .string()
    .min(2, "The Ownership type must be at least 2 chars"),
  businessProfileBusinessType: z
    .string()
    .min(2, "The Business type must be at least 2 chars"),
  businessProfileMCC: z.string().min(2, "The MCC must be at least 2 chars"),
  businessProfileGoodsServices: z
    .string()
    .min(2, "The Goods Services must be at least 2 chars"),
  businessProfileBankName: z
    .string()
    .min(2, "The Bank Name must be at least 2 chars"),
  businessProfileBusinessCheckingAccount: z
    .string()
    .min(2, "The Business Checking Account must be at least 2 chars"),
  businessProfileBusinessCheckRouting: z
    .string()
    .min(2, "The Business Check Routing must be at least 2 chars"),
});
type BusinessProfileDataForm = z.infer<typeof schema>;

interface BusinessProfileFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessProfileDataForm) => void;
  formData?: BusinessProfileDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
}

const BusinessProfileForm: React.FC<BusinessProfileFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    businessProfileOwnershipType: "",
    businessProfileBusinessType: "",
    businessProfileMCC: "",
    businessProfileGoodsServices: "",
    businessProfileBankName: "",
    businessProfileBusinessCheckingAccount: "",
    businessProfileBusinessCheckRouting: "",
  },
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessProfileDataForm>({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });
  const onSubmit: SubmitHandler<BusinessProfileDataForm> = (data) => {
    console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <FormControl mb={4} isInvalid={!!errors.businessProfileOwnershipType}>
        <FormLabel htmlFor="businessProfileOwnershipType">
          Ownership Type
        </FormLabel>
        <Input
          id="businessProfileOwnershipType"
          type="text"
          placeholder="Enter the ownership type"
          {...register("businessProfileOwnershipType")}
        />
        {errors.businessProfileOwnershipType && (
          <Text color="semantic.error.DEFAULT">
            {errors.businessProfileOwnershipType.message}
          </Text>
        )}
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessProfileBusinessType}>
        <FormLabel htmlFor="businessProfileBusinessType">
          Type of Business
        </FormLabel>
        <Input
          id="businessProfileBusinessType"
          type="text"
          placeholder="Enter the business type"
          {...register("businessProfileBusinessType")}
        />
        {errors.businessProfileBusinessType && (
          <Text color="semantic.error.DEFAULT">
            {errors.businessProfileBusinessType.message}
          </Text>
        )}
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessProfileGoodsServices}>
        <FormLabel htmlFor="businessProfileGoodsServices">
          Goods Services
        </FormLabel>
        {/* TODO Debe ser un textbox */}
        <Textarea
          id="businessProfileGoodsServices"
          placeholder="Enter the goods services"
          {...register("businessProfileGoodsServices")}
        />
        {errors.businessProfileGoodsServices && (
          <Text color="semantic.error.DEFAULT">
            {errors.businessProfileGoodsServices.message}
          </Text>
        )}
      </FormControl>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.businessProfileBankName}>
          <FormLabel htmlFor="businessProfileBankName">Bank Name</FormLabel>
          <Input
            id="businessProfileBankName"
            type="text"
            placeholder="Enter the bank name"
            {...register("businessProfileBankName")}
          />
          {errors.businessProfileBankName && (
            <Text color="semantic.error.DEFAULT">
              {errors.businessProfileBankName.message}
            </Text>
          )}
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessProfileMCC}>
          <FormLabel htmlFor="businessProfileMCC">MCC</FormLabel>
          <Input
            id="businessProfileMCC"
            type="text"
            placeholder="Enter the MCC"
            {...register("businessProfileMCC")}
          />
          {errors.businessProfileMCC && (
            <Text color="semantic.error.DEFAULT">
              {errors.businessProfileMCC.message}
            </Text>
          )}
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl
          mb={4}
          isInvalid={!!errors.businessProfileBusinessCheckRouting}
        >
          <FormLabel htmlFor="businessProfileBusinessCheckRouting">
            Business Check Routing
          </FormLabel>
          <Input
            id="businessProfileBusinessCheckRouting"
            type="text"
            placeholder="Enter the business check routing"
            {...register("businessProfileBusinessCheckRouting")}
          />
          {errors.businessProfileBusinessCheckRouting && (
            <Text color="semantic.error.DEFAULT">
              {errors.businessProfileBusinessCheckRouting.message}
            </Text>
          )}
        </FormControl>

        <FormControl
          mb={4}
          isInvalid={!!errors.businessProfileBusinessCheckingAccount}
        >
          <FormLabel htmlFor="businessProfileBusinessCheckingAccount">
            Business Checking Account
          </FormLabel>
          <Input
            id="businessProfileBusinessCheckingAccount"
            type="text"
            placeholder="Enter the business checking account"
            {...register("businessProfileBusinessCheckingAccount")}
          />
          {errors.businessProfileBusinessCheckingAccount && (
            <Text color="semantic.error.DEFAULT">
              {errors.businessProfileBusinessCheckingAccount.message}
            </Text>
          )}
        </FormControl>
      </HStack>
      {/* TODO validar el campo con un api */}

      {/* TODO open new window to connect the bank validar el campo con un api */}
    </Box>
  );
};

export default BusinessProfileForm;
