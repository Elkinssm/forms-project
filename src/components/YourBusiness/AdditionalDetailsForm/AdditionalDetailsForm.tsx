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
  years: z.preprocess(
    (val) => Number(val),
    z.number().int().min(1, "Years in business must be at least 1")
  ),
  locations: z.preprocess(
    (val) => Number(val),
    z.number().int().min(1, "Locations must be at least 1")
  ),
  mailing: z.preprocess(
    (val) => (val === null ? "" : val),
    z.string().min(1, "Please select an option")
  ),
  website: z.string().url("Invalid website URL"),
});
type BusinessDataForm = z.infer<typeof schema>;

interface AdditionalDetailsFormProps {
  title: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
}

const AdditionalDetailsForm: React.FC<AdditionalDetailsFormProps> = ({
  title,
  onNext,
  onDataChange,
  formData = { years: 0, locations: 0, mailing: "", website: "" },
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
      <Text fontWeight="bold" fontSize="lg" mb={4} color="text.highEmphasis">
        {title}
      </Text>
      <FormControl mb={4} isInvalid={!!errors.years}>
        <FormLabel htmlFor="corporate">Years in Business</FormLabel>
        <Input
          id="years"
          type="number"
          placeholder="Enter the years in business"
          {...register("years")}
        />
        {errors.years && (
          <Text color="semantic.error.DEFAULT">{errors.years.message}</Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.locations}>
        <FormLabel htmlFor="merchant"># Of Locations</FormLabel>
        <Input
          id="locations"
          type="text"
          placeholder="Enter your merchant name"
          {...register("locations")}
        />
        {errors.locations && (
          <Text color="semantic.error.DEFAULT">{errors.locations.message}</Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.mailing}>
        <FormLabel>Mailing Address</FormLabel>
        <RadioGroup>
          <Stack direction="column">
            <Radio value="option1" {...register("mailing")}>
              DBA
            </Radio>
            <Radio value="option2" {...register("mailing")}>
              Legal
            </Radio>
          </Stack>
        </RadioGroup>
        {errors.mailing && (
          <Text color="semantic.error.DEFAULT">{errors.mailing.message}</Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.website}>
        <FormLabel htmlFor="merchant">Website</FormLabel>
        <Input
          id="website"
          type="text"
          placeholder="Enter your website"
          {...register("website")}
        />
        {errors.website && (
          <Text color="semantic.error.DEFAULT">{errors.website.message}</Text>
        )}
      </FormControl>
    </Box>
  );
};

export default AdditionalDetailsForm;
