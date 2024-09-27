import { Box, Checkbox, Text } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const twoMin = 2;
const schema = z.object({
  controllerOfficerFirstName: z
    .string()
    .min(2, "The First Name must be at least 2 chars"),
  controllerOfficerMiddleName: z
    .string()
    .min(2, "The Middle Name must be at least 2 chars"),
  controllerOfficerLastName: z
    .string()
    .min(2, "The Last Name must be at least 2 chars"),
  controllerOfficerTitle: z
    .string()
    .min(2, "The Title must be at least 2 chars"),
  controllerOfficerIsOwner: z.number(),
  controllerOfficerAddress: z
    .string()
    .min(10, "The address must be at least 10 characters long"),
  controllerOfficerCity: z
    .string()
    .min(3, "The city must be at least 3 characters long"),
  controllerOfficerZip: z
    .string()
    .min(5, "The zip must be at least 5 characters long"),
  controllerOfficerHomePhone: z
    .string()
    .min(10, "The home phone must be at least 10 characters long"),
  controllerOfficerSSN: z
    .string()
    .min(twoMin, `The SSN must be at least ${twoMin} characters long`),
  controllerOfficerLicenseNumber: z
    .string()
    .min(
      twoMin,
      `The licence number must be at least ${twoMin} characters long`
    ),
  controllerOfficerLicenseNumberExpires: z.coerce
    .date()
    .refine((data) => data >= new Date(), {
      message: "Expiratin date must be in the future",
    }),
  controllerOfficerDob: z.coerce
  .date()
  .refine((data) => data < new Date(), {
    message: "Date of birth must be in the past",
  }),
  controllerOfficerEmail: z.string().email("A valid email is required"),
});
type ControllingOfficerDataForm = z.infer<typeof schema>;

interface ControllingOfficerFormProps {
  title: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: ControllingOfficerDataForm) => void;
  formData?: ControllingOfficerDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
}

const ControllingOfficerForm: React.FC<ControllingOfficerFormProps> = ({
  title,
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
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ControllingOfficerDataForm>({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });
  const onSubmit: SubmitHandler<ControllingOfficerDataForm> = (data) => {
    console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <Text fontWeight="bold" fontSize="lg" mb={4} color="text.highEmphasis">
        {title}
      </Text>

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
        <FormLabel htmlFor="controllerOfficerMiddleName">Middle Name</FormLabel>
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

      <FormControl mb={4} isInvalid={!!errors.controllerOfficerIsOwner}>
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
      </FormControl>

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

      <FormControl mb={4} isInvalid={!!errors.controllerOfficerZip}>
        <FormLabel htmlFor="controllerOfficerZip">Zip</FormLabel>
        <Input
          id="controllerOfficerZip"
          type="text"
          placeholder="Enter controller officer zip code"
          {...register("controllerOfficerZip")}
        />
        {errors.controllerOfficerZip && (
          <Text color="semantic.error.DEFAULT">
            {errors.controllerOfficerZip.message}
          </Text>
        )}
      </FormControl>

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

      <FormControl mb={4} isInvalid={!!errors.controllerOfficerSSN}>
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
      </FormControl>

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
          Driver License Number Expiration Date
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
    </Box>
  );
};

export default ControllingOfficerForm;
