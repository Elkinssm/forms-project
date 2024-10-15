import { Box, HStack, Text } from "@chakra-ui/react";
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
import { additionalInformationSchema } from "./additionalInformationSchema";

// TODO la validación aditionalDetailsMailing opciones no esta funcionando
type BusinessDataForm = z.infer<typeof additionalInformationSchema>;

interface AdditionalDetailsFormProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof additionalInformationSchema;
}

const AdditionalDetailsForm: React.FC<AdditionalDetailsFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    aditionalDetailsLocations: 0,
    aditionalDetailsMailing: "",
    aditionalDetailsWebsite: "",
  },
  validationSchema = additionalInformationSchema,
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });
  const onSubmit: SubmitHandler<BusinessDataForm> = (data) => {
    console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.aditionalDetailsLocations}>
          <FormLabel htmlFor="aditionalDetailsLocations">
            Number of Locations
          </FormLabel>
          <Input
            id="aditionalDetailsLocations"
            type="number"
            placeholder="Enter the number of locations"
            {...register("aditionalDetailsLocations")}
          />
          {errors.aditionalDetailsLocations && (
            <Text color="semantic.error.DEFAULT">
              {errors.aditionalDetailsLocations.message}
            </Text>
          )}
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.aditionalDetailsWebsite}>
          <FormLabel htmlFor="aditionalDetailsWebsite">
            Website address
          </FormLabel>
          <Input
            id="aditionalDetailsWebsite"
            type="text"
            placeholder="Enter your website address"
            {...register("aditionalDetailsWebsite")}
          />
          {errors.aditionalDetailsWebsite && (
            <Text color="semantic.error.DEFAULT">
              {errors.aditionalDetailsWebsite.message}
            </Text>
          )}
        </FormControl>
      </HStack>
      <FormControl mb={4} isInvalid={!!errors.aditionalDetailsMailing}>
        <FormLabel>Mailing Address</FormLabel>
        <RadioGroup
          value={formData.aditionalDetailsMailing}
          onChange={(value) => setValue("aditionalDetailsMailing", value)} // Asegúrate de que setValue provenga de useForm
        >
          <Stack direction="column">
            <Radio value="corporate" {...register("aditionalDetailsMailing")}>
              Corporate / Legal Name
            </Radio>
            <Radio value="dba" {...register("aditionalDetailsMailing")}>
              DBA
            </Radio>
          </Stack>
        </RadioGroup>
        {errors.aditionalDetailsMailing && (
          <Text color="semantic.error.DEFAULT">
            {errors.aditionalDetailsMailing.message}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

export default AdditionalDetailsForm;
