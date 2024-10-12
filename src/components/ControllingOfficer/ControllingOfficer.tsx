import { Box, Checkbox, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ZipInput from "../FormComponents/ZipInputField";
import { controllingOfficerSchema } from "./controllingOfficerSchema";

type ControllingOfficerDataForm = z.infer<typeof controllingOfficerSchema>;

interface ControllingOfficerFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: ControllingOfficerDataForm) => void;
  formData?: ControllingOfficerDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof controllingOfficerSchema;
}

const ControllingOfficerForm: React.FC<ControllingOfficerFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    controllerOfficerFirstName: "",
    controllerOfficerMiddleName: "",
    controllerOfficerLastName: "",
    controllerOfficerTitle: "",
    controllerOfficerIsOwner: 0,
    controllerOfficerAddress: "",
    controllerOfficerCity: "",
    controllerOfficerZip: "",
    controllerOfficerHomePhone: "",
    controllerOfficerSSN: "",
    controllerOfficerLicenseNumber: "",
    controllerOfficerLicenseNumberExpires: new Date(),
    controllerOfficerDob: new Date(),
    controllerOfficerEmail: "",
  },
  validationSchema = controllingOfficerSchema,
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ControllingOfficerDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });
  const onSubmit: SubmitHandler<ControllingOfficerDataForm> = (data) => {
    console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <FormControl mb={4} isInvalid={!!errors.controllerOfficerIsOwner}>
        <HStack spacing={4} mb={4}>
          <FormLabel htmlFor="controllerOfficerTitle">Is Owner</FormLabel>
          <Checkbox
            id="controllerOfficerIsOwner"
            {...register("controllerOfficerIsOwner")}
          />
          {errors.controllerOfficerIsOwner && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerIsOwner.message}
            </Text>
          )}
        </HStack>
      </FormControl>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.controllerOfficerFirstName}>
          <FormLabel htmlFor="controllerOfficerFirstName">First Name</FormLabel>
          <Input
            id="controllerOfficerFirstName"
            type="text"
            placeholder="Enter the first name"
            {...register("controllerOfficerFirstName")}
          />
          {errors.controllerOfficerFirstName && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerFirstName.message}
            </Text>
          )}
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.controllerOfficerMiddleName}>
          <FormLabel htmlFor="controllerOfficerMiddleName">
            Middle Name
          </FormLabel>
          <Input
            id="controllerOfficerMiddleName"
            type="text"
            placeholder="Enter the middle name"
            {...register("controllerOfficerMiddleName")}
          />
          {errors.controllerOfficerMiddleName && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerMiddleName.message}
            </Text>
          )}
        </FormControl>
      </HStack>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.controllerOfficerLastName}>
          <FormLabel htmlFor="controllerOfficerLastName">Last Name</FormLabel>
          <Input
            id="controllerOfficerLastName"
            type="text"
            placeholder="Enter the last name"
            {...register("controllerOfficerLastName")}
          />
          {errors.controllerOfficerLastName && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerLastName.message}
            </Text>
          )}
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.controllerOfficerDob}>
          <FormLabel htmlFor="controllerOfficerDob">Date of Birth</FormLabel>
          <Input
            id="controllerOfficerDob"
            type="date"
            placeholder="Enter date of Birth"
            {...register("controllerOfficerDob")}
          />
          {errors.controllerOfficerDob && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerDob.message}
            </Text>
          )}
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.controllerOfficerTitle}>
          <FormLabel htmlFor="controllerOfficerTitle">Title</FormLabel>
          <Input
            id="controllerOfficerTitle"
            type="text"
            placeholder="Enter the title"
            {...register("controllerOfficerTitle")}
          />
          {errors.controllerOfficerTitle && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerTitle.message}
            </Text>
          )}
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.controllerOfficerEmail}>
          <FormLabel htmlFor="controllerOfficerEmail">Email</FormLabel>
          <Input
            id="controllerOfficerEmail"
            type="text"
            placeholder="Enter controller officer email"
            {...register("controllerOfficerEmail")}
          />
          {errors.controllerOfficerEmail && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerEmail.message}
            </Text>
          )}
        </FormControl>
      </HStack>

      <FormControl mb={4} isInvalid={!!errors.controllerOfficerAddress}>
        <FormLabel htmlFor="controllerOfficerAddress">Address</FormLabel>
        <Input
          id="controllerOfficerAddress"
          type="text"
          placeholder="Enter controller officer address"
          {...register("controllerOfficerAddress")}
        />
        {errors.controllerOfficerAddress && (
          <Text color="semantic.error.DEFAULT">
            {errors.controllerOfficerAddress.message}
          </Text>
        )}
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.controllerOfficerCity}>
        <FormLabel htmlFor="controllerOfficerCity">City</FormLabel>
        <Input
          id="controllerOfficerCity"
          type="text"
          placeholder="Enter controller officer city"
          {...register("controllerOfficerCity")}
        />
        {errors.controllerOfficerCity && (
          <Text color="semantic.error.DEFAULT">
            {errors.controllerOfficerCity.message}
          </Text>
        )}
      </FormControl>
      <HStack spacing={4} mb={4}>
        <ZipInput
          label="Zip Code"
          id="controllerOfficerZip"
          errors={errors}
          register={register}
        />

        <FormControl mb={4} isInvalid={!!errors.controllerOfficerHomePhone}>
          <FormLabel htmlFor="controllerOfficerHomePhone">Home phone</FormLabel>
          <Input
            id="controllerOfficerHomePhone"
            type="text"
            placeholder="Enter controller officer home phone"
            {...register("controllerOfficerHomePhone")}
          />
          {errors.controllerOfficerHomePhone && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerHomePhone.message}
            </Text>
          )}
        </FormControl>
      </HStack>
      {/* <FormControl mb={4} isInvalid={!!errors.controllerOfficerSSN}>
        <FormLabel htmlFor="controllerOfficerSSN">SSN</FormLabel>
        <Input
          id="controllerOfficerSSN"
          type="text"
          placeholder="Enter SSN"
          {...register("controllerOfficerSSN")}
        />
        {errors.controllerOfficerSSN && (
          <Text color="semantic.error.DEFAULT">
            {errors.controllerOfficerSSN.message}
          </Text>
        )}
      </FormControl> */}
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.controllerOfficerLicenseNumber}>
          <FormLabel htmlFor="controllerOfficerLicenseNumber">
            Driver License Number
          </FormLabel>
          <Input
            id="controllerOfficerLicenseNumber"
            type="text"
            placeholder="Enter the driver license number"
            {...register("controllerOfficerLicenseNumber")}
          />
          {errors.controllerOfficerLicenseNumber && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerLicenseNumber.message}
            </Text>
          )}
        </FormControl>

        <FormControl
          mb={4}
          isInvalid={!!errors.controllerOfficerLicenseNumberExpires}
        >
          <FormLabel htmlFor="controllerOfficerLicenseNumberExpires">
            Expiration Date
          </FormLabel>
          <Input
            id="controllerOfficerLicenseNumberExpires"
            type="date"
            placeholder="Enter driver license number expiration date"
            {...register("controllerOfficerLicenseNumberExpires")}
          />
          {errors.controllerOfficerLicenseNumberExpires && (
            <Text color="semantic.error.DEFAULT">
              {errors.controllerOfficerLicenseNumberExpires.message}
            </Text>
          )}
        </FormControl>
      </HStack>
    </Box>
  );
};

export default ControllingOfficerForm;
