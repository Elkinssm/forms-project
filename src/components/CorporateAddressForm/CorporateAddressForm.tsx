import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Select,
  HStack,
  useTheme,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const schema = z.object({
  address: z.string().min(5, { message: "Address is required" }),
  aditionalInfo: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zip: z
    .string()
    .min(5, { message: "ZIP code must be at least 5 characters long" }),
});

type BusinessDataForm = z.infer<typeof schema>;


interface CorporateAddressFormProps {
  title: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
}

const CorporateAddressForm: React.FC<CorporateAddressFormProps> = ({
  title,
  onNext,
  onBack,
  onDataChange,
  formData = { address: "", aditionalInfo: "", city: "", state: "", zip: "" }, 
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
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Text fontWeight="bold" fontSize="lg" mb={4} color="text.highEmphasis">
        {title}
      </Text>
      <FormControl mb={4} isInvalid={!!errors.address}>
        <FormLabel htmlFor="address" color={theme.colors.gray[700]}>
          Address
        </FormLabel>
        <Input
          id="address"
          type="text"
          placeholder="Enter your company address"
          {...register("address")}
        />
        {errors.address && (
          <Text color={"semantic.error.DEFAULT"}>{errors.address.message}</Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.aditionalInfo}>
        <FormLabel htmlFor="aditionalInfo" color={theme.colors.gray[700]}>
          Additional info (Suite, building #)
        </FormLabel>
        <Input
          id="aditionalInfo"
          type="text"
          placeholder="Enter the additional info"
          {...register("aditionalInfo")}
        />
        {errors.aditionalInfo && (
          <Text color={"semantic.error.DEFAULT"}>
            {errors.aditionalInfo.message}
          </Text>
        )}
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.city}>
        <FormLabel htmlFor="city" color={theme.colors.gray[700]}>
          City
        </FormLabel>
        <Select id="city" placeholder="Select city" {...register("city")}>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </Select>
        {errors.city && (
          <Text color={"semantic.error.DEFAULT"}>{errors.city.message}</Text>
        )}
      </FormControl>
      <HStack spacing={4} mb={4}>
        <FormControl isInvalid={!!errors.state}>
          <FormLabel htmlFor="state" color={theme.colors.gray[700]}>
            State
          </FormLabel>
          <Select id="state" placeholder="Select state" {...register("state")}>
            <option value="NY">New York</option>
            <option value="CA">California</option>
            <option value="IL">Illinois</option>
          </Select>
          {errors.state && (
            <Text color={"semantic.error.DEFAULT"}>{errors.state.message}</Text>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.zip}>
          <FormLabel htmlFor="zip" color={theme.colors.gray[700]}>
            ZIP Code
          </FormLabel>
          <Input
            id="zip"
            type="text"
            placeholder="Enter your ZIP code"
            {...register("zip")}
          />
          {errors.zip && (
            <Text color={"semantic.error.DEFAULT"}>{errors.zip.message}</Text>
          )}
        </FormControl>
      </HStack>
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

export default CorporateAddressForm;