import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  useTheme,
  RadioGroup,
  Stack,
  Radio,
  List,
  ListItem,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputMask from "react-input-mask";
import { corporateInformationFormSchema } from "./corporateInformationFormSchema";
import AllDataForm from "../../../utils/AllDataForm";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import useAddressGoogle from "../../../hooks/address/useAddressGoogle";
import { Address, AddressComponent } from "../../../interfaces/Address";
import { handleMaxInput } from "../../../utils/MaxLengthInput";

type BusinessDataForm = z.infer<typeof corporateInformationFormSchema>;

interface CorporateInfomationFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof corporateInformationFormSchema;
  formDataAll?: AllDataForm;
}

const CorporateInformationForm: React.FC<CorporateInfomationFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    corpLegalFedTaxId: "",
    corpLegalName: "",
    corpLegalAddress: "",
    corpLegalCity: "",
    corpLegalState: "",
    corpLegalZip: "",
    corpLegalPhone: "",
    corpLegalEmail: "",
    yearsInBusiness: 0,
    aditionalDetailsLocations: 0,
    aditionalDetailsWebsite: "",
    aditionalDetailsMailing: "",
  },
  validationSchema = corporateInformationFormSchema,
  formRef,
}) => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    setValue,
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
      setValue("corpLegalAddress", selectedAddress);
      setValue("corpLegalCity", city);
      setValue("corpLegalState", state);
      setValue("corpLegalZip", zip);

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

  const onSubmit: SubmitHandler<BusinessDataForm> = (data) => {
    //console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  // const corpLegalCity = watch("corpLegalCity");
  // const corpLegalState = watch("corpLegalState");
  // const corpLegalZip = watch("corpLegalZip");

  



  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.corpLegalFedTaxId}>
          <FormLabel htmlFor="corpLegalFedTaxId">
            Federal Tax ID (EIN)
          </FormLabel>
          <Input
            as={InputMask}
            mask="**-*******"
            maskChar={null}
            id="corpLegalFedTaxId"
            type="text"
            placeholder="Enter your federal tax ID"
            {...register("corpLegalFedTaxId")}
            
          />
          <ErrorMessage error={errors.corpLegalFedTaxId?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.yearsInBusiness}>
          <FormLabel htmlFor="yearsInBusiness">Years in Business</FormLabel>
          <Input
            maxLength={3}
            id="yearsInBusiness"
            type="number"
            onInput={(e) => handleMaxInput(e,3)}
            placeholder="Enter your years in business"
            {...register("yearsInBusiness")}
          />
          <ErrorMessage error={errors.yearsInBusiness?.message} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.corpLegalName}>
          <FormLabel htmlFor="legalName" color={theme.colors.gray[700]}>
            Legal Name
          </FormLabel>
          <Input
            id="legalName"
            type="text"
            placeholder="Enter your legal name"
            {...register("corpLegalName")}
          />
          <ErrorMessage error={errors.corpLegalName?.message} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl isInvalid={!!errors.corpLegalPhone}>
          <FormLabel htmlFor="corpLegalPhone" color={theme.colors.gray[700]}>
            Legal Phone
          </FormLabel>
          <Input
            id="corpLegalPhone"
            type="number"            
            onInput={(e) => handleMaxInput(e,10)}
            placeholder="Enter your Legal Phone"
            {...register("corpLegalPhone")}
          />
          <ErrorMessage error={errors.corpLegalPhone?.message} />
        </FormControl>

        <FormControl isInvalid={!!errors.corpLegalEmail}>
          <FormLabel htmlFor="corpLegalEmail" color={theme.colors.gray[700]}>
            Legal Email
          </FormLabel>
          <Input
            id="corpLegalEmail"
            type="text"
            placeholder="Enter your your company / legal email"
            {...register("corpLegalEmail")}
          />
          <ErrorMessage error={errors.corpLegalEmail?.message} />
        </FormControl>
      </HStack>

      <FormControl mb={4} isInvalid={!!errors.corpLegalAddress}>
        <FormLabel htmlFor="corpLegalAddress" color={theme.colors.gray[700]}>
          Legal Address
        </FormLabel>
        <Input
          id="corpLegalAddress"
          type="text"
          placeholder="Enter your legal address"
          {...register("corpLegalAddress", {
            onChange: (e) => {
              setQuery(e.target.value);
              // setValue("corpLegalAddress", e.target.value);
              setIsAddressValid(false);
            },
          })}
          onBlur={() => setSuggestions([])}
        />
        <ErrorMessage error={errors.corpLegalAddress?.message} />
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

      <FormControl mb={4} isInvalid={!!errors.corpLegalCity}>
        <FormLabel htmlFor="corpLegalCity" color={theme.colors.gray[700]}>
          Legal City
        </FormLabel>
        <Input
          id="corpLegalCity"
          type="text"
          placeholder="Enter your legal city"
          // value={corpLegalCity}
          readOnly
          {...register("corpLegalCity")}
        />
        <ErrorMessage error={errors.corpLegalCity?.message} />
      </FormControl>

      <HStack spacing={4} mb={4}>
        <FormControl isInvalid={!!errors.corpLegalState}>
          <FormLabel htmlFor="corpLegalState" color={theme.colors.gray[700]}>
            Legal State
          </FormLabel>
          <Input
            id="corpLegalState"
            type="text"
            placeholder="Enter your legal state"
            // value={corpLegalState}
            readOnly
            {...register("corpLegalState")}
          />
          <ErrorMessage error={errors.corpLegalState?.message} />
        </FormControl>

        <FormControl isInvalid={!!errors.corpLegalZip}>
          <FormLabel htmlFor="corpLegalZip" color={theme.colors.gray[700]}>
            Legal ZIP Code
          </FormLabel>
          <Input
            id="corpLegalZip"
            type="text"
            placeholder="Enter your legal ZIP code"
            // value={corpLegalZip}
            readOnly
            {...register("corpLegalZip")}
          />
          <ErrorMessage error={errors.corpLegalZip?.message} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.aditionalDetailsLocations}>
          <FormLabel htmlFor="aditionalDetailsLocations">
            Number of Locations
          </FormLabel>
          <Input
            id="aditionalDetailsLocations"
            type="number"
            onInput={(e) => handleMaxInput(e,3)}
            placeholder="Enter the number of locations"
            {...register("aditionalDetailsLocations")}
          />
          <ErrorMessage error={errors.aditionalDetailsLocations?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.aditionalDetailsWebsite}>
          <FormLabel htmlFor="aditionalDetailsWebsite">
            Website address
          </FormLabel>
          <Input
            id="aditionalDetailsWebsite"
            type="text"
            placeholder="Enter your website address"
            {...register("aditionalDetailsWebsite")}
          />
          <ErrorMessage error={errors.aditionalDetailsWebsite?.message} />
        </FormControl>
      </HStack>

      <FormControl mb={4} isInvalid={!!errors.aditionalDetailsMailing}>
        <FormLabel>Mailing Address</FormLabel>
        <RadioGroup
          value={formData.aditionalDetailsMailing}
          onChange={(value) => setValue("aditionalDetailsMailing", value)} // Asegúrate de que setValue provenga de useForm
        >
          <Stack direction="column">
            <Radio value="corporate" {...register("aditionalDetailsMailing")}>
              Corporate / Legal Name
            </Radio>
            <Radio value="dba" {...register("aditionalDetailsMailing")}>
              DBA
            </Radio>
          </Stack>
        </RadioGroup>
        <ErrorMessage error={errors.aditionalDetailsMailing?.message} />
      </FormControl>
    </Box>
  );
};

export default CorporateInformationForm;
