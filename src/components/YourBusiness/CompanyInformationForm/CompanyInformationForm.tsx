import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import InputMask from "react-input-mask";
import ZipInput from "../../FormComponents/ZipInputField";
import { companyInformationScheme } from "./companyInformationSchema";
import AllDataForm from "../../../utils/AllDataForm";
import ErrorMessage from "../../FormComponents/ErrorMessage";

type BusinessDataForm = z.infer<typeof companyInformationScheme>;

interface CompanyInformationFormProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof companyInformationScheme;
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
  validationSchema = companyInformationScheme,

  formRef,
  formDataAll,
}) => {
  const {
    register,
    handleSubmit,
    reset,
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

      formData.merchEmail = formDataAll.corpLegalEmail;
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
          <ErrorMessage error={errors.merchName?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.yearsInBusiness}>
          <FormLabel htmlFor="yearsInBusiness">Years in Business</FormLabel>
          <Input
            id="yearsInBusiness"
            type="number"
            placeholder="Enter your years in business"
            {...register("yearsInBusiness")}
          />
          <ErrorMessage error={errors.yearsInBusiness?.message} />
        </FormControl>
      </HStack>
      <FormControl mb={4} isInvalid={!!errors.merchDBAName}>
        <FormLabel htmlFor="merchDBAName">DBA Name</FormLabel>
        <Input
          id="merchDBAName"
          type="text"
          placeholder="Enter your DBA name"
          {...register("merchDBAName")}
          isReadOnly={isReadOnlyData}
        />
        <ErrorMessage error={errors.merchDBAName?.message} />
      </FormControl>
      <HStack spacing={4} mb={4}>
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
        <FormControl mb={4} isInvalid={!!errors.merchEmail}>
          <FormLabel htmlFor="merchEmail">Location Email</FormLabel>
          <Input
            id="merchEmail"
            type="text"
            placeholder="Enter your location email"
            {...register("merchEmail")}
            isReadOnly={isReadOnlyData}
          />
          <ErrorMessage error={errors.merchEmail?.message} />
        </FormControl>
      </HStack>
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

export default CompanyInformationForm;
