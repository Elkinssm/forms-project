import { Box, HStack, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { businesProfileSchema } from "./businessProfileSchema";
import ErrorMessage from "../../FormComponents/ErrorMessage";

type BusinessProfileDataForm = z.infer<typeof businesProfileSchema>;

interface BusinessProfileFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessProfileDataForm) => void;
  formData?: BusinessProfileDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof businesProfileSchema;
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
  validationSchema = businesProfileSchema,
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessProfileDataForm>({
    resolver: zodResolver(validationSchema),
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
        <ErrorMessage error={errors.businessProfileOwnershipType?.message} />
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
        <ErrorMessage error={errors.businessProfileBusinessType?.message} />
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
        <ErrorMessage error={errors.businessProfileGoodsServices?.message} />
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
          <ErrorMessage error={errors.businessProfileBankName?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessProfileMCC}>
          <FormLabel htmlFor="businessProfileMCC">MCC</FormLabel>
          <Input
            id="businessProfileMCC"
            type="text"
            placeholder="Enter the MCC"
            {...register("businessProfileMCC")}
          />
          <ErrorMessage error={errors.businessProfileMCC?.message} />
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
          <ErrorMessage
            error={errors.businessProfileBusinessCheckRouting?.message}
          />
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
          <ErrorMessage
            error={errors.businessProfileBusinessCheckingAccount?.message}
          />
        </FormControl>
      </HStack>
      {/* TODO validar el campo con un api */}

      {/* TODO open new window to connect the bank validar el campo con un api */}
    </Box>
  );
};

export default BusinessProfileForm;
