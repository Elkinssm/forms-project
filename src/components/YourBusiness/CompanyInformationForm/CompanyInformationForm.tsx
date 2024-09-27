import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, FormControl, FormLabel, HStack, Input, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import InputMask from "react-input-mask";

const schema = z.object({
  merchName: z
    .string()
    .min(6, "The location name must be at least 6 characters long"),
  merchAddress: z.string().min(10, "The address must be at least 10 characters long"),
  merchCity: z.string().min(3, "The city must be at least 3 characters long"),
  merchState: z.string().min(2, "The state must be at least 2 characters long"),
  merchZip: z.string().min(5, "The zip must be at least 5 characters long"),
  merchPhone: z.string().min(10, "The phone must be at least 10 characters long"),
  yearsInBusiness: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Years in business must be at least 1 digit long")
  ),
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
  formData = { merchName: "",  },
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

  const [zipValue, setZipValue] = useState<string>("");
  const [mask, setMask] = useState<string>("");
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setZipValue(value);
    if (value.length > 5) {
      setMask("99999-9999");
    } else {
      setMask("");
    }
  };

  const onSubmit: SubmitHandler<BusinessDataForm> = (data, event) => {
    console.log(data);
    if (event) event.preventDefault();
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <Text fontWeight="bold" fontSize="2xl" mb={4} color="text.highEmphasis">
        {title}
      </Text>
      <FormControl mb={4} isInvalid={!!errors.merchName} isRequired>
        <FormLabel htmlFor="merchName">Location Name</FormLabel>
        <Input
          id="merchName"
          type="text"
          placeholder="Enter your locaton name"
          {...register("merchName")}
        />
        {errors.merchName && (
          <Text color="semantic.error.DEFAULT">{errors.merchName.message}</Text>
        )}
      </FormControl>
      <HStack spacing={4} mb={4}>
        
        <FormControl mb={4} isInvalid={!!errors.yearsInBusiness}>
          <FormLabel htmlFor="yearsInBusiness">Years in Business</FormLabel>
          <Input
            id="yearsInBusiness"
            type="number"
            placeholder="Enter your years in business"
            {...register("yearsInBusiness")}
          />
          {errors.yearsInBusiness && (
            <Text color="semantic.error.DEFAULT">
              {errors.yearsInBusiness.message}
            </Text>
          )}
        </FormControl>
      </HStack>

      <FormControl mb={4} isInvalid={!!errors.merchAddress}>
        <FormLabel htmlFor="merchAddress">Location Address</FormLabel>
        <Input
          id="merchAddress"
          type="text"
          placeholder="Enter your location address"
          {...register("merchAddress")}
        />
        {errors.merchAddress && (
          <Text color="semantic.error.DEFAULT">
            {errors.merchAddress.message}
          </Text>
        )}
      </FormControl>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.merchCity}>
          <FormLabel htmlFor="merchCity">Location City</FormLabel>
          <Input
            id="merchCity"
            type="text"
            placeholder="Enter your location city"
            {...register("merchCity")}
          />
          {errors.merchCity && (
            <Text color="semantic.error.DEFAULT">{errors.merchCity.message}</Text>
          )}
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.merchState}>
          <FormLabel htmlFor="merchState">Location State</FormLabel>
          <Input
            id="merchState"
            type="text"
            placeholder="Enter your location state"
            {...register("merchState")}
          />
          {errors.merchState && (
            <Text color="semantic.error.DEFAULT">
              {errors.merchState.message}
            </Text>
          )}
        </FormControl>
      </HStack>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.merchZip}>
          <FormLabel htmlFor="merchZip">Location Zip</FormLabel>
          <Input
            as={InputMask}
            mask={mask}
            maskChar={null}
            value={zipValue}
            id="merchZip"
            type="text"
            placeholder="Enter your location zip"
            {...register("merchZip")}
            onChange={handleZipChange}
          />
          {errors.merchZip && (
            <Text color="semantic.error.DEFAULT">{errors.merchZip.message}</Text>
          )}
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.merchPhone}>
          <FormLabel htmlFor="merchPhone">Location Phone</FormLabel>
          <Input
            id="merchPhone"
            type="text"
            placeholder="Enter your location phone"
            {...register("merchPhone")}
          />
          {errors.merchPhone && (
            <Text color="semantic.error.DEFAULT">
              {errors.merchPhone.message}
            </Text>
          )}
        </FormControl>
      </HStack>


    </Box>
  );
};

export default CompanyInformationForm;
