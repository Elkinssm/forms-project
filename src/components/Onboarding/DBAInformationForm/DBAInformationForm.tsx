import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, FormControl, FormLabel, HStack, Input, List, ListItem, Text, useTheme } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DBAInformationScheme } from "./DBAInformationSchema";
import AllDataForm from "../../../utils/AllDataForm";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import ReusableCheckbox from "../../FormComponents/ReusableCheckbox";
import useAddressGoogle from "../../../hooks/address/useAddressGoogle";
import { Address, AddressComponent } from "../../../interfaces/Address";
import { handleMaxInput } from "../../../utils/MaxLengthInput";

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
    controllerOfficerIsOwner: "yes",
  },
  validationSchema = DBAInformationScheme,

  formRef,
  formDataAll,
}) => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });

  const { fetchAddress } = useAddressGoogle();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Address[]>([]);
  const [isAddressValid, setIsAddressValid] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 2) {
        const response = await fetchAddress(query);
        if (response && response.results) {
          setSuggestions(response.results);
          setIsAddressValid(false);
        }
      } else {
        setSuggestions([]);
        setIsAddressValid(false);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleAddressSelect = (address: Address) => {
    try {
      const selectedAddress = address.formatted_address;
      const addressComponents = address.address_components;

      if (!addressComponents || addressComponents.length === 0) {
        console.error("No address components found");
        return;
      }

      const getAddressComponent = (type: string, useShortName = false) => {
        const component = addressComponents.find(
          (component: AddressComponent) => component.types.includes(type)
        );
        return component?.[useShortName ? "short_name" : "long_name"] || "";
      };

      setSuggestions([]);

      // Obtener ciudad con múltiples alternativas
      const city =
        getAddressComponent("locality") ||
        getAddressComponent("sublocality") ||
        getAddressComponent("administrative_area_level_2") ||
        "";

      // Obtener estado (siempre usar short name para el estado)
      const state =
        getAddressComponent("administrative_area_level_1", true) || "";

      // Obtener ZIP code
      const zip = getAddressComponent("postal_code") || "";

      // console.table({ selectedAddress, city, state, zip });

      // Establecer valores del formulario sin importar la validez completa
      setValue("merchAddress", selectedAddress);
      setValue("merchCity", city);
      setValue("merchState", state);
      setValue("merchZip", zip);

      // Actualizar el estado del query
      setQuery("");

      // Validar solo los campos disponibles (por ejemplo, estado es obligatorio)
      setIsAddressValid(true);

      // Limpiar sugerencias
      
    } catch (error) {
      if (!isAddressValid) {
        alert("Please enter a valid state in the address.");
        return;
      }
      console.error("Error processing address:", error);
      setIsAddressValid(false);
    }
  };

  const onSubmit: SubmitHandler<BusinessDataForm> = (data, event) => {
    //console.log(data);
    if (event) event.preventDefault();
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  const [isReadOnlyData, setisReadOnlyData] = useState(false);

  // Efecto para actualizar variables cuando isLoading es true
  useEffect(() => {
    if (formDataAll) {
      formData.merchDBAName = formDataAll.corpLegalName;
      formData.merchAddress = formDataAll.corpLegalAddress;
      formData.merchCity = formDataAll.corpLegalCity;
      formData.merchState = formDataAll.corpLegalState;
      formData.merchZip = formDataAll.corpLegalZip;
      formData.merchPhone = formDataAll.corpLegalPhone;
      setisReadOnlyData(true);
      setIsChecked(true);
    }
    reset(formData);
  }, [formDataAll?.controllerOfficerIsOwner, onreset]);

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) {
      if (formDataAll) {
        formData.merchDBAName = formDataAll.corpLegalName;
        formData.merchAddress = formDataAll.corpLegalAddress;
        formData.merchCity = formDataAll.corpLegalCity;
        formData.merchState = formDataAll.corpLegalState;
        formData.merchZip = formDataAll.corpLegalZip;
        formData.merchPhone = formDataAll.corpLegalPhone
      }
    } else {
      // Actualiza el valor del checkbox en el formulario
      formData.merchDBAName = "";
      formData.merchAddress = "";
      formData.merchCity = "";
      formData.merchState = "";
      formData.merchZip = "";
      formData.merchPhone = "";
    }
    setValue("controllerOfficerIsOwner", checked ? "yes" : "no");
    setisReadOnlyData(checked);
    reset(formData);
  };


  const merchCity = watch("merchCity");
  const merchState = watch("merchState");
  const merchZip = watch("merchZip");

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
            onInput={(e) => handleMaxInput(e,3)}
            {...register("merchPhone")}
            isReadOnly={isReadOnlyData}
          />
          <ErrorMessage error={errors.merchPhone?.message} />
        </FormControl>
      </HStack>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.merchAddress}>
        <FormLabel htmlFor="merchAddress" color={theme.colors.gray[700]}>
          Location Address
        </FormLabel>
        <Input
          id="merchAddress"
          type="text"
          placeholder="Enter your location address"
          {...register("merchAddress", {
            onChange: (e) => {
              setQuery(e.target.value);
              // setValue("corpLegalAddress", e.target.value);
              setIsAddressValid(false);
            },
          })}
          isReadOnly={isReadOnlyData}
          onBlur={() => setSuggestions([])}
        />
        <ErrorMessage error={errors.merchAddress?.message} />
        {suggestions.length > 0 && (
          <List>
            {suggestions.map((suggestion, index) => (
              <ListItem
                key={index}
                onMouseDown={() => {
                  handleAddressSelect(suggestion);
                }}
                cursor="pointer"
                _hover={{ backgroundColor: "brand.primary" }}
                p={2}
                borderWidth="1px"
                borderRadius="md"
                mb={0}
                boxShadow="sm"
              >
                {suggestion.formatted_address}
              </ListItem>
            ))}
          </List>
        )}
      </FormControl>

        <FormControl mb={4} isInvalid={!!errors.merchCity}>
          <FormLabel htmlFor="merchCity">Location City</FormLabel>
          <Input
            id="merchCity"
            type="text"
            placeholder="Enter your location city"
            {...register("merchCity")}
            value={merchCity}
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
            value={merchState}
            isReadOnly={isReadOnlyData}
          />
          <ErrorMessage error={errors.merchState?.message} />
        </FormControl>

        <FormControl isInvalid={!!errors.merchZip}>
          <FormLabel htmlFor="merchZip" color={theme.colors.gray[700]}>
            Legal ZIP Code
          </FormLabel>
          <Input
            id="merchZip"
            type="text"
            placeholder="Enter your legal ZIP code"
            isReadOnly={isReadOnlyData}
            value={merchZip}
            {...register("merchZip")}
          />
          <ErrorMessage error={errors.merchZip?.message} />
        </FormControl>

        {/* <ZipInput
          label="Location Zip"
          id="merchZip"
          errors={errors}
          register={register}
          isReadOnly={isReadOnlyData}
        /> */}
      </HStack>
    </Box>
  );
};

export default DBAInformationForm;
