import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  corporate: z.string().min(6, {
    message: "The company name must be at least 6 characters long",
  }),
  merchant: z.string().min(6, {
    message: "The merchant name must be at least 6 characters long",
  }),
});

type BusinessDataForm = z.infer<typeof schema>;

interface CompanyInformationFormProps {
  title: string;
}

const CompanyInformationForm = ({ title }: CompanyInformationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: BusinessDataForm) => {
    console.log(data);
    alert(`Corporate: ${data.corporate}, Merchant: ${data.merchant}`);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Text fontWeight="bold" fontSize="lg" mb={4}>
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
          <Text color="red.500">{errors.corporate.message}</Text>
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
          <Text color="red.500">{errors.merchant.message}</Text>
        )}
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={6}>
        Next
      </Button>
    </Box>
  );
};

export default CompanyInformationForm;
