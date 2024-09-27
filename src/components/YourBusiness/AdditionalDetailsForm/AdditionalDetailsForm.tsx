import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  aditionalDetailsLocations: z.preprocess(
    (val) => Number(val),
    z.number().int().min(1, "Locations must be at least 1")
  ),
  aditionalDetailsMailing: z.preprocess(
    (val) => (val === null ? "" : val),
    z.string().min(1, "Please select an option")
  ),
  aditionalDetailsWebsite: z.string().url("Invalid website URL"),
});
type BusinessDataForm = z.infer<typeof schema>;

interface AdditionalDetailsFormProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
}

const AdditionalDetailsForm: React.FC<AdditionalDetailsFormProps> = ({
  onNext,
  onDataChange,
  formData = { aditionalDetailsLocations: 0, aditionalDetailsMailing: "", aditionalDetailsWebsite: "" },
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
      <FormControl mb={4} isInvalid={!!errors.aditionalDetailsLocations}>
        <FormLabel htmlFor="aditionalDetailsLocations">Number of Locations</FormLabel>
        <Input
          id="aditionalDetailsLocations"
          type="text"
          placeholder="Enter the number of locations"
          {...register("aditionalDetailsLocations")}
        />
        {errors.aditionalDetailsLocations && (
          <Text color="semantic.error.DEFAULT">{errors.aditionalDetailsLocations.message}</Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.aditionalDetailsMailing}>
        <FormLabel>Mailing Address</FormLabel>
        <RadioGroup>
          <Stack direction="column">
            <Radio value="option2" {...register("aditionalDetailsMailing")}>
              Corporate / Legal Name
            </Radio>
            <Radio value="option1" {...register("aditionalDetailsMailing")}>
              DBA
            </Radio>
          </Stack>
        </RadioGroup>
        {errors.aditionalDetailsMailing && (
          <Text color="semantic.error.DEFAULT">{errors.aditionalDetailsMailing.message}</Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.aditionalDetailsWebsite}>
        <FormLabel htmlFor="aditionalDetailsWebsite">Website address</FormLabel>
        <Input
          id="aditionalDetailsWebsite"
          type="text"
          placeholder="Enter your website address"
          {...register("aditionalDetailsWebsite")}
        />
        {errors.aditionalDetailsWebsite && (
          <Text color="semantic.error.DEFAULT">{errors.aditionalDetailsWebsite.message}</Text>
        )}
      </FormControl>
    </Box>
  );
};

export default AdditionalDetailsForm;
