import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import InputMask from "react-input-mask";
import ZipInput from "../../FormComponents/ZipInputField";
import AllDataForm from '../../../utils/AllDataForm';

const schema = z.object({
  merchDBAName: z.string()
    .min(6, "The DBA name must be at least 6 characters long"),
  merchName: z
    .string()
    .min(6, "The location name must be at least 6 characters long"),
  merchAddress: z
    .string()
    .min(10, "The address must be at least 10 characters long"),
  merchCity: z.string().min(3, "The city must be at least 3 characters long"),
  merchState: z.string().min(2, "The state must be at least 2 characters long"),
  merchZip: z.string().min(5, "The zip must be at least 5 characters long"),
  merchPhone: z.string().min(10, "The phone number must be at least 10 characters long"),
  yearsInBusiness: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Years in business must be at least 1 digit long")
  ),
  merchEmail: z.string().email("A valid email is required"),
});

type BusinessDataForm = z.infer<typeof schema>;

interface CompanyInformationFormProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  formDataAll?: AllDataForm;
}

const CompanyInformationForm: React.FC<CompanyInformationFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    merchDBAName: "",
    merchName: "",
    merchAddress: "",
    merchCity: "",
    merchState: "",
    merchZip: "",
    merchPhone: "",
    yearsInBusiness: 0,
    merchEmail: "",
  },
  formRef,
  formDataAll,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<BusinessDataForm> = (data, event) => {
    console.log(data);
    if (event) event.preventDefault();
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  // Efecto para actualizar variables cuando isLoading es true
  useEffect(() => {
    
    if (formDataAll?.controllerOfficerIsOwner) {

      formData.merchDBAName = formDataAll.corpLegalName;

      formData.merchAddress = formDataAll.corpLegalAddress;
      formData.merchCity = formDataAll.corpLegalCity;
      formData.merchState = formDataAll.corpLegalState;
      formData.merchZip = formDataAll.corpLegalZip;
      formData.merchPhone = formDataAll.corpLegalPhone;

      formData.merchEmail = formDataAll.corpLegalEmail;

      reset(formData);


    }
  }, [formDataAll?.controllerOfficerIsOwner, onreset]);

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.merchName} isRequired>
          <FormLabel htmlFor="merchName">Location Name</FormLabel>
          <Input
            id="merchName"
            type="text"
            placeholder="Enter your locaton name"
            {...register("merchName")}
          />
          {errors.merchName && (
            <Text color="semantic.error.DEFAULT">
              {errors.merchName.message}
            </Text>
          )}
        </FormControl>

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
      <FormControl mb={4} isInvalid={!!errors.merchDBAName}>
        <FormLabel htmlFor="merchDBAName">DBA Name</FormLabel>
        <Input
          id="merchDBAName"
          type="text"
          placeholder="Enter your DBA name"
          {...register("merchDBAName")}
        />
        {errors.merchDBAName && (
          <Text color="semantic.error.DEFAULT">
            {errors.merchDBAName.message}
          </Text>
        )}
      </FormControl>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.merchPhone}>
          <FormLabel htmlFor="merchPhone">Location Phone</FormLabel>
          <Input
            id="merchPhone"
            type="number"
            placeholder="Enter your location phone"
            {...register("merchPhone")}
          />
          {errors.merchPhone && (
            <Text color="semantic.error.DEFAULT">
              {errors.merchPhone.message}
            </Text>
          )}
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.merchEmail}>
          <FormLabel htmlFor="merchEmail">Location Email</FormLabel>
          <Input
            id="merchEmail"
            type="text"
            placeholder="Enter your location email"
            {...register("merchEmail")}
          />
          {errors.merchEmail && (
            <Text color="semantic.error.DEFAULT">
              {errors.merchEmail.message}
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
      <HStack spacing={4} mb={4}>
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

        <ZipInput
          label="Location Zip"
          id="merchZip"
          errors={errors}
          register={register}
        />
      </HStack>
    </Box>
  );
};

export default CompanyInformationForm;
