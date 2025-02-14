import React, { useState, useEffect } from "react";
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
  const [isAddressValid, setIsAddressValid] = useState(false);

  const address = watch(`${name}.address`);
  const city = watch(`${name}.city`);
  const state = watch(`${name}.state`);
  const zip = watch(`${name}.zip`);

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

      const state =
        getAddressComponent("administrative_area_level_1", true) || "";

      const zip = getAddressComponent("postal_code") || "";

      setValue(`${name}.address`, selectedAddress);
      setValue(`${name}.city`, city);
      setValue(`${name}.state`, state);
      setValue(`${name}.zip`, zip);

      setQuery("");
      setIsAddressValid(true);
    } catch (error) {
      console.error("Error processing address:", error);
      setIsAddressValid(false);
    }
  };

  return (
    <FormControl mb={4} isInvalid={!!error}>
      <FormLabel htmlFor={name} color="gray.700">
        {label}
      </FormLabel>
      <InputGroup>
        <InputLeftElement>
          <Tooltip
            label={`City: ${city || "N/A"}, State: ${state || "N/A"}, ZIP: ${
              zip || "N/A"
            }`}
            aria-label="Address details"
            placement="bottom-start"
            hasArrow
            isDisabled={!city && !state && !zip}
            bg={"brand.primary"}
            fontSize={"md"}
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
          {...register(`${name}.address`, {
            onChange: (e) => {
              setQuery(e.target.value);
              setIsAddressValid(false);
            },
          })}
          onBlur={() => setSuggestions([])}
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
