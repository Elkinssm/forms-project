import React, { useState, useEffect, useRef } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
  Tooltip,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useFormContext, FieldError } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import useAddressGoogle from "../../hooks/address/useAddressGoogle";
import { Address, AddressComponent } from "../../interfaces/Address";

interface AddressInputProps {
  name: string;
  label: string;
  placeholder: string;
  error?: FieldError;
}

const AddressInput: React.FC<AddressInputProps> = ({
  name,
  label,
  placeholder,
  error,
}) => {
  const { register, setValue, watch } = useFormContext();
  const { fetchAddress } = useAddressGoogle();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Address[]>([]);
  const [isAddressValid, setIsAddressValid] = useState(false); // Corregido aquí
  const labelRef = useRef<HTMLLabelElement>(null);

  const city = watch(`${name}.city`);
  const stateCode = watch(`${name}.stateCode`);
  const zip = watch(`${name}.zip`);
  const country = watch(`${name}.country`);
  const apartment = watch(`${name}.apartment`);

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

      const city =
        getAddressComponent("locality") ||
        getAddressComponent("sublocality") ||
        getAddressComponent("administrative_area_level_2") ||
        "";

      const stateCode =
        getAddressComponent("administrative_area_level_1", true) || "";

      const zip = getAddressComponent("postal_code") || "";

      const zip_suffix = getAddressComponent("postal_code_suffix") || "";

      const country = getAddressComponent("country") || "";

      const apartment = getAddressComponent("subpremise") || "";

      setValue(`${name}.street`, selectedAddress);
      setValue(`${name}.city`, city);
      setValue(`${name}.stateCode`, stateCode);
      if (zip_suffix) {
        setValue(`${name}.zip`, `${zip}-${zip_suffix}`);
      } else {
        setValue(`${name}.zip`, zip);
      }
      setValue(`${name}.country`, country);
      setValue(`${name}.apartment`, apartment);

      setQuery("");
      setIsAddressValid(true);
    } catch (error) {
      console.error("Error processing address:", error);
      setIsAddressValid(false);
    }
  };

  return (
    <FormControl mb={4} isInvalid={!!error}>
      <FormLabel htmlFor={name} color="gray.700" ref={labelRef}>
        {label}
      </FormLabel>
      <InputGroup>
        <InputLeftElement>
          <Tooltip
            label={`Country: ${country || "N/A"}, 
            StateCode: ${stateCode || "N/A"}, 
            City: ${city || "N/A"}, 
            ${apartment ? `Apartment: ${apartment},` : ""} 
            ZIP: ${zip || "N/A"}`}
            aria-label="Address details"
            placement="bottom-start"
            hasArrow
            isDisabled={!city && !stateCode && !zip}
            bg={"brand.primary"}
            fontSize={"md"}
            minWidth={
              labelRef.current ? labelRef.current.offsetWidth : "fit-content"
            }
          >
            <IconButton
              aria-label="Show address details"
              icon={<InfoIcon />}
              size="sm"
              variant="ghost"
            />
          </Tooltip>
        </InputLeftElement>
        <Input
          id={name}
          type="text"
          placeholder={placeholder}
          borderColor={isAddressValid ? "green.500" : "gray.300"}
          // borderColor={isAddressValid ? "green.500" : "red.500"} // Cambia el color si es válido
          {...register(`${name}.street`, {
            onChange: (e) => {
              setQuery(e.target.value);
              setIsAddressValid(false);
            },
          })}
        />
      </InputGroup>
      <ErrorMessage error={error?.message} />
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
  );
};

export default AddressInput;
