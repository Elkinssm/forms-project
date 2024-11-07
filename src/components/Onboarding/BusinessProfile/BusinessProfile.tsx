import { Box, HStack, Select, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { businessProfileSchema } from "./businessProfileSchema";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import { SearchItem } from "../../FormComponents/Interfaces/SearchItem";
import { convertToSearchItemsForSearchInput } from "../../../utils/convertToSearchItems";
import { bankData } from "../../../utils/data/Banks";
import SearchInput from "../../FormComponents/SearchInput";
import { validOwnershipTypes } from "../../../utils/data/OwnerShipTypes";

type BusinessProfileDataForm = z.infer<typeof businessProfileSchema>;

interface BusinessProfileFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessProfileDataForm) => void;
  formData?: BusinessProfileDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof businessProfileSchema;
}

const BusinessProfileForm: React.FC<BusinessProfileFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    businessProfileOwnershipType: "",
    businessProfileBusinessType: "",
    businessProfileGoodsServices: "",
    businessProfileBankName: "",
    businessProfileBusinessCheckingAccount: "",
    businessProfileBusinessCheckingAccountCheck: "",
    businessProfileBusinessCheckRouting: "",
    businessProfileBusinessCheckRoutingCheck: "",
  },
  validationSchema = businessProfileSchema,
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BusinessProfileDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });
  const onSubmit: SubmitHandler<BusinessProfileDataForm> = (data) => {
    console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  const searchItems: SearchItem[] =
    convertToSearchItemsForSearchInput(bankData);

  const handleItemSelect = (itemName: string) => {
    setValue("businessProfileBankName", itemName); // Actualiza el valor en el formulario
  };

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const ownershipType = formData.businessProfileOwnershipType;
    if (ownershipType && !validOwnershipTypes.includes(ownershipType)) {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(event.target.value === "Other");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.trim() == "") {
      setShowOtherInput(false);
    }
  };

  useEffect(() => {
    const ownershipType = formData.businessProfileOwnershipType;
    if (ownershipType && !validOwnershipTypes.includes(ownershipType)) {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
    console.log("formData", formData.businessProfileOwnershipType);
  }, []);

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.businessProfileOwnershipType}>
          <FormLabel htmlFor="businessProfileOwnershipType">
            Ownership Type
          </FormLabel>
          {!showOtherInput && (
            <Select
              id="businessProfileOwnershipType"
              placeholder="Select your Ownership Type"
              {...register("businessProfileOwnershipType")}
              onChange={handleSelectChange}
            >
              <option value="Sole Proprietor">Sole Proprietor</option>
              <option value="Partnership">Partnership</option>
              <option value="Corporation">Corporation</option>
              <option value="LLC">LLC</option>
              <option value="PA/PC">PA/PC</option>
              <option value="Publicly">Traded</option>
              <option value="Goverment">Goverment</option>
              <option value="Non-Profit">Non-Profit</option>
              <option value="Other">Other</option>
            </Select>
          )}
          {showOtherInput && (
            <Input
              mt={4}
              placeholder="Please specify"
              {...register("businessProfileOwnershipType")}
              onChange={handleInputChange}
            />
          )}
          <ErrorMessage error={errors.businessProfileOwnershipType?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.businessProfileBusinessType}>
          <FormLabel htmlFor="businessProfileBusinessType">
            Type of Business
          </FormLabel>
          <Select
            id="businessProfileBusinessType"
            placeholder="Select your Type of Business"
            {...register("businessProfileBusinessType")}
          >
            <option value="Retail">Retail</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Service">Service</option>
            <option value="Internet">Internet</option>
            <option value="Lodging">Lodging</option>
            <option value="Other">Other</option>
          </Select>
          <ErrorMessage error={errors.businessProfileBusinessType?.message} />
        </FormControl>
      </HStack>
      <FormControl mb={4} isInvalid={!!errors.businessProfileGoodsServices}>
        <FormLabel htmlFor="businessProfileGoodsServices">
          Goods & Services
        </FormLabel>
        {/* TODO Debe ser un textbox */}
        <Textarea
          id="businessProfileGoodsServices"
          placeholder="Enter the goods services"
          {...register("businessProfileGoodsServices")}
        />
        <ErrorMessage error={errors.businessProfileGoodsServices?.message} />
      </FormControl>
      <HStack spacing={4} mb={4}>
        <SearchInput
          label="Bank Name"
          id="businessProfileBankName"
          placeholder="Enter the bank name"
          data={searchItems}
          onItemSelect={handleItemSelect}
          errors={errors}
          register={register}
        />
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl
          mb={4}
          isInvalid={!!errors.businessProfileBusinessCheckRouting}
        >
          <FormLabel htmlFor="businessProfileBusinessCheckRouting">
            Business Check Routing
          </FormLabel>
          <Input
            id="businessProfileBusinessCheckRouting"
            type="text"
            placeholder="Enter the business check routing"
            {...register("businessProfileBusinessCheckRouting")}
          />
          <ErrorMessage
            error={errors.businessProfileBusinessCheckRouting?.message}
          />
        </FormControl>

        <FormControl
          mb={4}
          isInvalid={!!errors.businessProfileBusinessCheckRoutingCheck}
        >
          <FormLabel htmlFor="businessProfileBusinessCheckRoutingCheck">
            Business Check Routing
          </FormLabel>
          <Input
            id="businessProfileBusinessCheckRoutingCheck"
            type="text"
            placeholder="Enter the business check routing"
            {...register("businessProfileBusinessCheckRoutingCheck")}
            onPaste={(e) => e.preventDefault()}
          />
          <ErrorMessage
            error={errors.businessProfileBusinessCheckRoutingCheck?.message}
          />
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl
          mb={4}
          isInvalid={!!errors.businessProfileBusinessCheckingAccount}
        >
          <FormLabel htmlFor="businessProfileBusinessCheckingAccount">
            Business Checking Account
          </FormLabel>
          <Input
            id="businessProfileBusinessCheckingAccount"
            type="text"
            placeholder="Enter the business checking account"
            {...register("businessProfileBusinessCheckingAccount")}
          />
          <ErrorMessage
            error={errors.businessProfileBusinessCheckingAccount?.message}
          />
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={!!errors.businessProfileBusinessCheckingAccountCheck}
        >
          <FormLabel htmlFor="businessProfileBusinessCheckingAccountCheck">
            Business Checking Account
          </FormLabel>
          <Input
            id="businessProfileBusinessCheckingAccountCheck"
            type="text"
            placeholder="Enter the business checking account"
            {...register("businessProfileBusinessCheckingAccountCheck")}
            onPaste={(e) => e.preventDefault()}
          />
          <ErrorMessage
            error={errors.businessProfileBusinessCheckingAccountCheck?.message}
          />
        </FormControl>
      </HStack>
      {/* TODO validar el campo con un api */}

      {/* TODO open new window to connect the bank validar el campo con un api */}
    </Box>
  );
};

export default BusinessProfileForm;
