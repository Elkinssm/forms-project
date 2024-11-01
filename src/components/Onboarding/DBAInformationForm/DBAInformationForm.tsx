import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, FormControl, FormLabel, HStack, Input, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import InputMask from "react-input-mask";
import ZipInput from "../../FormComponents/ZipInputField";
import { DBAInformationScheme } from "./DBAInformationSchema";
import AllDataForm from "../../../utils/AllDataForm";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import ReusableCheckbox from "../../FormComponents/ReusableCheckbox";

type BusinessDataForm = z.infer<typeof DBAInformationScheme>;

interface DBAInformationFormProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof DBAInformationScheme;
  formDataAll?: AllDataForm;
}

const DBAInformationForm: React.FC<DBAInformationFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    merchDBAName: "",
    merchAddress: "",
    merchCity: "",
    merchState: "",
    merchZip: "",
    merchPhone: "",
    controllerOfficerIsOwner: "no",
  },
  validationSchema = DBAInformationScheme,

  formRef,
  formDataAll,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<BusinessDataForm> = (data, event) => {
    console.log(data);
    if (event) event.preventDefault();
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  const [isReadOnlyData, setIsReadOnlyData] = useState(false);

  // Efecto para actualizar variables cuando isLoading es true
  useEffect(() => {
    if (formDataAll?.controllerOfficerIsOwner === "yes") {
      formData.merchDBAName = formDataAll.corpLegalName;

      formData.merchAddress = formDataAll.corpLegalAddress;
      formData.merchCity = formDataAll.corpLegalCity;
      formData.merchState = formDataAll.corpLegalState;
      formData.merchZip = formDataAll.corpLegalZip;
      formData.merchPhone = formDataAll.corpLegalPhone;
      setIsReadOnlyData(true);
    } else {
      // formData.merchDBAName = "";
      // formData.merchAddress = "";
      // formData.merchCity = "";
      // formData.merchState = "";
      // formData.merchZip = "";
      // formData.merchPhone = "";
      // formData.merchEmail = "";
    }
    reset(formData);
  }, [formDataAll?.controllerOfficerIsOwner, onreset]);

  useEffect(() => {
    // Si la data cargada tiene el valor "yes", marcar el checkbox
    if (formData?.controllerOfficerIsOwner === "yes") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [formData?.controllerOfficerIsOwner]);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    // Actualiza el valor del checkbox en el formulario
    setValue("controllerOfficerIsOwner", checked ? "yes" : "no");
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <Text fontSize="xl">DBA</Text>
      <FormControl>
        <HStack alignItems={"center"}>
          <ReusableCheckbox
            id="controllerOfficerIsOwner"
            label="Same Information as Legal"
            isChecked={isChecked}
            onChange={handleCheckboxChange}
            register={register}
            error={errors.controllerOfficerIsOwner}
          />
        </HStack>
      </FormControl>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.merchDBAName}>
          <FormLabel htmlFor="merchDBAName">DBA Name / Location Name</FormLabel>
          <Input
            id="merchDBAName"
            type="text"
            placeholder="Enter your DBA name"
            {...register("merchDBAName")}
            isReadOnly={isReadOnlyData}
          />
          <ErrorMessage error={errors.merchDBAName?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.merchPhone}>
          <FormLabel htmlFor="merchPhone">Location Phone</FormLabel>
          <Input
            id="merchPhone"
            type="number"
            placeholder="Enter your location phone"
            {...register("merchPhone")}
            isReadOnly={isReadOnlyData}
          />
          <ErrorMessage error={errors.merchPhone?.message} />
        </FormControl>
      </HStack>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.merchAddress}>
          <FormLabel htmlFor="merchAddress">Location Address</FormLabel>
          <Input
            id="merchAddress"
            type="text"
            placeholder="Enter your location address"
            {...register("merchAddress")}
            isReadOnly={isReadOnlyData}
          />
          <ErrorMessage error={errors.merchAddress?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.merchCity}>
          <FormLabel htmlFor="merchCity">Location City</FormLabel>
          <Input
            id="merchCity"
            type="text"
            placeholder="Enter your location city"
            {...register("merchCity")}
            isReadOnly={isReadOnlyData}
          />
          <ErrorMessage error={errors.merchCity?.message} />
        </FormControl>
      </HStack>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.merchState}>
          <FormLabel htmlFor="merchState">Location State</FormLabel>
          <Input
            id="merchState"
            type="text"
            placeholder="Enter your location state"
            {...register("merchState")}
            isReadOnly={isReadOnlyData}
          />
          <ErrorMessage error={errors.merchState?.message} />
        </FormControl>

        <ZipInput
          label="Location Zip"
          id="merchZip"
          errors={errors}
          register={register}
          isReadOnly={isReadOnlyData}
        />
      </HStack>
    </Box>
  );
};

export default DBAInformationForm;
