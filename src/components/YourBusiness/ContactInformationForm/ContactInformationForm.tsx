import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "./contactFormSchema";
import { z } from "zod";

type BusinessDataForm = z.infer<typeof contactFormSchema>;

interface ContactInformationFormFormProps {
  title: string;
  onNext?: () => void;
  onBack?: () => void;
  description: string;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof contactFormSchema;
}

const ContactInformationForm: React.FC<ContactInformationFormFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    contactInformationContact: "",
    contactInformationPrimaryName: "",
    contactInformationSecondaryName: "",
    aditionalDetailsMailing: "corporate",
  },
  validationSchema = contactFormSchema,
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
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
      <FormControl mb={4} isInvalid={!!errors.aditionalDetailsMailing}>
        <FormLabel>Use information</FormLabel>
        <RadioGroup value={formData.aditionalDetailsMailing}>
          <Stack direction="column">
            <Radio value="corporate" {...register("aditionalDetailsMailing")}>
              Corporate / Legal
            </Radio>
            <Radio value="bda" {...register("aditionalDetailsMailing")}>
              DBA
            </Radio>
            <Radio value="new" {...register("aditionalDetailsMailing")}>
              New
            </Radio>
          </Stack>
        </RadioGroup>
        {errors.aditionalDetailsMailing && (
          <Text color="semantic.error.DEFAULT">
            {errors.aditionalDetailsMailing.message}
          </Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.contactInformationContact}>
        <FormLabel htmlFor="contactInformationContact">Contact Name</FormLabel>
        <Input
          id="contactInformationContact"
          type="text"
          placeholder="Enter your contact name"
          {...register("contactInformationContact")}
        />
        {errors.contactInformationContact && (
          <Text color="semantic.error.DEFAULT">
            {errors.contactInformationContact.message}
          </Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.contactInformationPrimaryName}>
        <FormLabel htmlFor="contactInformationPrimaryName">
          Contact Email
        </FormLabel>
        <Input
          id="contactInformationPrimaryName"
          type="text"
          placeholder="Enter the primary contact name"
          {...register("contactInformationPrimaryName")}
        />
        {errors.contactInformationPrimaryName && (
          <Text color="semantic.error.DEFAULT">
            {errors.contactInformationPrimaryName.message}
          </Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.contactInformationSecondaryName}>
        <FormLabel htmlFor="contactInformationSecondaryName">
          Contact Phone
        </FormLabel>
        <Input
          id="contactInformationSecondaryName"
          type="text"
          placeholder="Enter the secondary contact name"
          {...register("contactInformationSecondaryName")}
        />
        {errors.contactInformationSecondaryName && (
          <Text color="semantic.error.DEFAULT">
            {errors.contactInformationSecondaryName.message}
          </Text>
        )}
      </FormControl>

      {/* TODO Add email and phone for primary and secondary contact name */}
      {/* colocar checkbox para copiar Legal or DBE
      same as legal
      same as DBE
      New information
      */}
    </Box>
  );
};

export default ContactInformationForm;
