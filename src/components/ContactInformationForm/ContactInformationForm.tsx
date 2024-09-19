import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("The company name must be a valid email").min(6),
  phone: z.preprocess(
    (val) => Number(val),
    z.number().min(1000000000, "Phone number must be at least 10 digits long")
  ),
  federal: z
    .string()
    .min(6, "The federal number must be at least 6 characters long"),
});

type BusinessDataForm = z.infer<typeof schema>;

interface ContactInformationFormFormProps {
  title: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
}

const ContactInformationForm: React.FC<ContactInformationFormFormProps> = ({
  title,
  onNext,
  onBack,
  onDataChange,
  formData = { email: "", phone: 0, federal: "" }, // Default value
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Text fontWeight="bold" fontSize="2xl" mb={4} color="text.highEmphasis">
        {title}
      </Text>
      <FormControl mb={4} isInvalid={!!errors.email}>
        <FormLabel htmlFor="corporate">Email Address</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter your company email"
          {...register("email")}
        />
        {errors.email && (
          <Text color="semantic.error.DEFAULT">{errors.email.message}</Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.phone}>
        <FormLabel htmlFor="phone">Phone Number</FormLabel>
        <Input
          id="phone"
          type="number"
          placeholder="Enter the phone number"
          {...register("phone")}
        />
        {errors.phone && (
          <Text color="semantic.error.DEFAULT">{errors.phone.message}</Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.federal}>
        <FormLabel htmlFor="federal">Federal Tax ID</FormLabel>
        <Input
          id="federal"
          type="text"
          placeholder="Enter the Federal Tax ID"
          {...register("federal")}
        />
        {errors.federal && (
          <Text color="semantic.error.DEFAULT">{errors.federal.message}</Text>
        )}
      </FormControl>
      <Box display="flex" justifyContent="space-between" mt={6}>
        {onBack && (
          <Button onClick={onBack} colorScheme="gray">
            Back
          </Button>
        )}
        <Button type="submit" colorScheme="blue">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ContactInformationForm;
