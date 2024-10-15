import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, UseFormSetValue } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ZipInput from "../FormComponents/ZipInputField";
import { controllingOfficerSchema } from "./controllingOfficerSchema";
import ReusableCheckbox from "../FormComponents/ReusableCheckbox";

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
    controllerOfficerOfficerIsOwner: "no",
    controllerOfficerAddress: "",
    controllerOfficerCity: "",
    controllerOfficerZip: "",
    controllerOfficerHomePhone: "",
    //   controllerOfficerSSN: "",
    controllerOfficerLicenseNumber: "",
    controllerOfficerLicenseNumberExpires: "",
    controllerOfficerDob: "",
    controllerOfficerEmail: "",
  },
  validationSchema = controllingOfficerSchema,
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
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

  const handleFormattedDate = (
    dateValidate: string | undefined,
    setValue: UseFormSetValue<ControllingOfficerDataForm> // Usa el tipo importado
  ) => {
    if (dateValidate) {
      const formattedDate = new Date(dateValidate).toISOString().split("T")[0];
      const dateObject = new Date(formattedDate);
      if (!isNaN(dateObject.getTime())) {
        // Verifica si la fecha es válida y usa el campo correcto de forma tipada
        setValue("controllerOfficerDob", formattedDate);
      } else {
        console.error("Invalid date:", formattedDate);
      }
    }
  };

  useEffect(() => {
    handleFormattedDate(formData.controllerOfficerDob, setValue);
  }, [formData.controllerOfficerDob, setValue]);

  useEffect(() => {
    handleFormattedDate(
      formData.controllerOfficerLicenseNumberExpires,
      setValue
    );
  }, [formData.controllerOfficerLicenseNumberExpires, setValue]);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    // Actualiza el valor del checkbox en el formulario
    setValue("controllerOfficerOfficerIsOwner", checked ? "yes" : "no");
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <ReusableCheckbox
        id="controllerOfficerOfficerIsOwner"
        label="Is Owner"
        isChecked={isChecked}
        onChange={handleCheckboxChange}
        register={register}
        error={errors.controllerOfficerOfficerIsOwner}
      />
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
            {...register("controllerOfficerDob", {
              valueAsDate: false,
            })}
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
            type="number"
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
            {...register("controllerOfficerLicenseNumber", {
              valueAsDate: false,
            })}
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
