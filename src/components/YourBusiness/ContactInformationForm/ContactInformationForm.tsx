import React, { useEffect } from "react";
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
import AllDataForm from "../../../utils/AllDataForm";

type BusinessDataForm = z.infer<typeof contactFormSchema>;
//TODO si se selecciona corporate/Legal se debe copiar la info, igual si es DBA, si dice New, si es nuevo el registro 

interface ContactInformationFormFormProps {
  title: string;
  onNext?: () => void;
  onBack?: () => void;
  description: string;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof contactFormSchema;
  formDataAll?: AllDataForm;
}

const ContactInformationForm: React.FC<ContactInformationFormFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    contactInformationContact: "",
    contactInformationEmail: "",
    contactInformationPhone: "",
    useInformationFrom: "new",
  },
  validationSchema = contactFormSchema,
  formRef,
  formDataAll,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });

  const useInformationFrom = watch("useInformationFrom"); // Watch for changes in the radio buttons

  useEffect(() => {
    if (useInformationFrom === "corporate") {
      // Copiar información de Corporate / Legal
      reset({
        contactInformationContact: formDataAll?.corpLegalName, 
        contactInformationEmail: formDataAll?.corpLegalEmail,
        contactInformationPhone: formDataAll?.corpLegalPhone,
        useInformationFrom: "corporate",
      });
    } else if (useInformationFrom === "bda") {
      // Copiar información de DBA
      reset({
        contactInformationContact: formDataAll?.merchName, 
        contactInformationEmail: formDataAll?.merchEmail,
        contactInformationPhone: formDataAll?.merchPhone,
        useInformationFrom: "bda",
      });
    } else if (useInformationFrom === "new") {
      // Limpiar el formulario para capturar nueva información
      reset({
        contactInformationContact: "",
        contactInformationEmail: "",
        contactInformationPhone: "",
        useInformationFrom: "new",
      });
    }
  }, [useInformationFrom, reset]);

  const onSubmit: SubmitHandler<BusinessDataForm> = (data) => {
    console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <FormControl mb={4} isInvalid={!!errors.useInformationFrom}>
        <FormLabel>Use information</FormLabel>
        <RadioGroup value={formData.useInformationFrom} defaultValue='new'>
          <Stack direction="column">
            <Radio value="corporate" {...register("useInformationFrom")}>
              Corporate / Legal
            </Radio>
            <Radio value="bda" {...register("useInformationFrom")}>
              DBA
            </Radio>
            <Radio value="new" {...register("useInformationFrom")}>
              New
            </Radio>
          </Stack>
        </RadioGroup>
        {errors.useInformationFrom && (
          <Text color="semantic.error.DEFAULT">
            {errors.useInformationFrom.message}
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
      <FormControl mb={4} isInvalid={!!errors.contactInformationEmail}>
        <FormLabel htmlFor="contactInformationEmail">
          Contact Email
        </FormLabel>
        <Input
          id="contactInformationEmail"
          type="text"
          placeholder="Enter the primary contact email"
          {...register("contactInformationEmail")}
        />
        {errors.contactInformationEmail && (
          <Text color="semantic.error.DEFAULT">
            {errors.contactInformationEmail.message}
          </Text>
        )}
      </FormControl>
      <FormControl mb={4} isInvalid={!!errors.contactInformationPhone}>
        <FormLabel htmlFor="contactInformationPhone">
          Contact Phone
        </FormLabel>
        <Input
          id="contactInformationPhone"
          type="text"
          placeholder="Enter the secondary contact phone"
          {...register("contactInformationPhone")}
        />
        {errors.contactInformationPhone && (
          <Text color="semantic.error.DEFAULT">
            {errors.contactInformationPhone.message}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

export default ContactInformationForm;
