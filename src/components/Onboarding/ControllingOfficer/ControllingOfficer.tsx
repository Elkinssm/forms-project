import { Box, HStack, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, UseFormSetValue } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ZipInput from "../../FormComponents/ZipInputField";
import { controllingOfficerSchema } from "./controllingOfficerSchema";
import ReusableCheckbox from "../../FormComponents/ReusableCheckbox";
import ErrorMessage from "../../FormComponents/ErrorMessage";

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

  const [isDisabledData, setIsDisabledData] = useState(true);

  const handleFormattedDate = (
    dateValidate: string | undefined,
    setValue: UseFormSetValue<ControllingOfficerDataForm>, // Usa el tipo importado
    field: keyof ControllingOfficerDataForm
  ) => {
    if (dateValidate) {
      const formattedDate = new Date(dateValidate).toISOString().split("T")[0];
      const dateObject = new Date(formattedDate);
      if (!isNaN(dateObject.getTime())) {
        // Verifica si la fecha es válida y usa el campo correcto de forma tipada
        setValue(field, formattedDate);
      } else {
        console.error("Invalid date:", formattedDate);
      }
    }
  };

  useEffect(() => {
    handleFormattedDate(
      formData.controllerOfficerDob,
      setValue,
      "controllerOfficerDob"
    );
  }, [formData.controllerOfficerDob, setValue]);

  useEffect(() => {
    handleFormattedDate(
      formData.controllerOfficerLicenseNumberExpires,
      setValue,
      "controllerOfficerLicenseNumberExpires"
    );
  }, [formData.controllerOfficerLicenseNumberExpires, setValue]);

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    // Actualiza el valor del checkbox en el formulario
    setValue("controllerOfficerOfficerIsOwner", checked ? "yes" : "no");

    setIsDisabledData(checked)






  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <FormLabel>Is Owner</FormLabel>
      <HStack spacing={4} mb={4}>
        <ReusableCheckbox
          id="controllerOfficerOfficerIsOwner"
          label=""
          isChecked={isChecked}
          onChange={handleCheckboxChange}
          register={register}
          error={errors.controllerOfficerOfficerIsOwner}
        />
        <Text>Has the controlling officer already been entered as one of the owners?</Text>
      </HStack>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.controllerOfficerFirstName}>
          <FormLabel htmlFor="controllerOfficerFirstName">First Name</FormLabel>
          <Input
            id="controllerOfficerFirstName"
            type="text"
            placeholder="Enter the first name"
            {...register("controllerOfficerFirstName")}
            isDisabled={isDisabledData}
          />
          <ErrorMessage error={errors.controllerOfficerFirstName?.message} />
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
            isDisabled={isDisabledData}
          />
          <ErrorMessage error={errors.controllerOfficerMiddleName?.message} />
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
            isDisabled={isDisabledData}
          />
          <ErrorMessage error={errors.controllerOfficerLastName?.message} />
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
            isDisabled={isDisabledData}
          />
          <ErrorMessage error={errors.controllerOfficerDob?.message} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.controllerOfficerTitle}>
          <FormLabel htmlFor={`controllerOfficerTitle`}>Job Title</FormLabel>
          <Select
            id={`controllerOfficerTitle`}
            placeholder="Select your Job Title"
            {...register(`controllerOfficerTitle`)}
            isDisabled={isDisabledData}
          >
            <option value="CEO">CEO</option>
            <option value="Owner">Owner</option>
            <option value="President">President</option>
            <option value="Vice President">Vice President</option>
            <option value="Chairman">Chairman</option>
            <option value="Other">Other</option>
          </Select>
          <ErrorMessage error={errors.controllerOfficerTitle?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.controllerOfficerEmail}>
          <FormLabel htmlFor="controllerOfficerEmail">Email</FormLabel>
          <Input
            id="controllerOfficerEmail"
            type="text"
            placeholder="Enter controller officer email"
            {...register("controllerOfficerEmail")}
            isDisabled={isDisabledData}
          />
          <ErrorMessage error={errors.controllerOfficerEmail?.message} />
        </FormControl>
      </HStack>

      <FormControl mb={4} isInvalid={!!errors.controllerOfficerAddress}>
        <FormLabel htmlFor="controllerOfficerAddress">Address</FormLabel>
        <Input
          id="controllerOfficerAddress"
          type="text"
          placeholder="Enter controller officer address"
          {...register("controllerOfficerAddress")}
          isDisabled={isDisabledData}
        />
        <ErrorMessage error={errors.controllerOfficerAddress?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.controllerOfficerCity}>
        <FormLabel htmlFor="controllerOfficerCity">City</FormLabel>
        <Input
          id="controllerOfficerCity"
          type="text"
          placeholder="Enter controller officer city"
          {...register("controllerOfficerCity")}
          isDisabled={isDisabledData}
        />
        <ErrorMessage error={errors.controllerOfficerCity?.message} />
      </FormControl>
      <HStack spacing={4} mb={4}>
        <ZipInput
          label="Zip Code"
          id="controllerOfficerZip"
          errors={errors}
          register={register}
          isDisabled={isDisabledData}
        />

        <FormControl mb={4} isInvalid={!!errors.controllerOfficerHomePhone}>
          <FormLabel htmlFor="controllerOfficerHomePhone">Home phone</FormLabel>
          <Input
            id="controllerOfficerHomePhone"
            type="number"
            placeholder="Enter controller officer home phone"
            {...register("controllerOfficerHomePhone")}
            isDisabled={isDisabledData}
          />
          <ErrorMessage error={errors.controllerOfficerHomePhone?.message} />
        </FormControl>
      </HStack>
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
            isDisabled={isDisabledData}
          />
          <ErrorMessage
            error={errors.controllerOfficerLicenseNumber?.message}
          />
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
            isDisabled={isDisabledData}
          />
          <ErrorMessage
            error={errors.controllerOfficerLicenseNumberExpires?.message}
          />
        </FormControl>
      </HStack>
    </Box>
  );
};

export default ControllingOfficerForm;
