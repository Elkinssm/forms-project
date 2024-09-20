import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  corporate: z
    .string()
    .min(6, "The company name must be at least 6 characters long"),
  merchant: z
    .string()
    .min(6, "The merchant name must be at least 6 characters long"),
});

type BusinessDataForm = z.infer<typeof schema>;

interface CompanyInformationFormProps {
  title: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
}

const CompanyInformationForm: React.FC<CompanyInformationFormProps> = ({
  title,
  onNext,
  onDataChange,
  formData = { corporate: "", merchant: "" },
  formRef,
}) => {
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
      <FormControl mb={4} isInvalid={!!errors.corporate}>
        <FormLabel htmlFor="corporate">Corporate / Legal name</FormLabel>
        <Input
          id="corporate"
          type="text"
          placeholder="Enter your company name"
          {...register("corporate")}
        />
        {errors.corporate && (
          <Text color="semantic.error.DEFAULT">{errors.corporate.message}</Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.merchant}>
        <FormLabel htmlFor="merchant">Merchant Name</FormLabel>
        <Input
          id="merchant"
          type="text"
          placeholder="Enter your merchant name"
          {...register("merchant")}
        />
        {errors.merchant && (
          <Text color="semantic.error.DEFAULT">{errors.merchant.message}</Text>
        )}
      </FormControl>
    </Box>
  );
};

export default CompanyInformationForm;
