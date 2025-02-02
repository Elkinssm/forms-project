import {
  Box,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  ButtonGroup,
  IconButton,
  HStack,
  Link,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Select,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { FormControl, FormLabel, Input, useTheme } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { ownerInformationScheme } from "./ownerInformationScheme";
import InputMask from "react-input-mask";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import AllDataForm from "../../../utils/AllDataForm";
import useAddressGoogle from "../../../hooks/address/useAddressGoogle";
import { Address, AddressComponent } from "../../../interfaces/Address";
import { handleMaxInput } from "../../../utils/MaxLengthInput";

// TODO Validar que la suma de todos los owners sea del 50%

type OwnerInformationDataForm = z.infer<typeof ownerInformationScheme>;

interface OwnerInformationFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: OwnerInformationDataForm) => void;
  formData?: OwnerInformationDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof ownerInformationScheme;
  formDataAll?: AllDataForm;
}

const OwnerInformationForm: React.FC<OwnerInformationFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    owners: [
      {
        ownerFirstName: "",
        ownerMiddleName: "",
        ownerLastName: "",
        ownerStateID: "",
        ownerSSN: "",
        ownerPercentOwnership: 1,
        ownerTitle: "",
        ownerBirthday: "",
        ownerEmail: "",
        ownerAddress: "",
        ownerCity: "",
        ownerZip: "",
        ownerPhone: "",
      },
    ],
  },
  validationSchema = ownerInformationScheme,
  formRef,
  formDataAll,
}) => {
  const theme = useTheme();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger
  } = useForm<OwnerInformationDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
    mode: "onChange",
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

  const handleAddressSelect = (address: Address, index: number) => {
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
      // const state = getAddressComponent("administrative_area_level_1", true) || "";

      // Obtener ZIP code
      const zip = getAddressComponent("postal_code") || "";

      // console.table({ selectedAddress, city, state, zip });

      // Establecer valores del formulario sin importar la validez completa
      setValue(`owners.${index}.ownerAddress`, selectedAddress);
      setValue(`owners.${index}.ownerCity`, city);
      // setValue(`owners.${index}.ownerAddress`, state);
      setValue(`owners.${index}.ownerZip`, zip);

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

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalError, setModalError] = useState<string | null>(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "owners",
  });

  const [openIndex, setOpenIndex] = useState<number[]>([0]);

  if (fields.length === 0) {
    append({
      ownerFirstName: "",
      ownerMiddleName: "",
      ownerLastName: "",
      ownerStateID: "",
      ownerSSN: "",
      ownerPercentOwnership: 1,
      ownerTitle: "",
      ownerBirthday: "",
      ownerEmail: "",
      ownerAddress: "",
      ownerCity: "",
      ownerZip: "",
      ownerPhone: "",
    });
  }

  // Validar antes de agregar un nuevo propietario
  const handleAddOwner = async () => {
    const isFormValid = await trigger(); // Ejecutar validación de formulario
    if (isFormValid) {
      append({
        ownerFirstName: "",
        ownerMiddleName: "",
        ownerLastName: "",
        ownerStateID: "",
        ownerSSN: "",
        ownerPercentOwnership: 1,
        ownerTitle: "",
        ownerBirthday: "",
        ownerEmail: "",
        ownerAddress: "",
        ownerCity: "",
        ownerZip: "",
        ownerPhone: "",
      });
      setOpenIndex([fields.length]); 
    } 
  };

  const onSubmit: SubmitHandler<OwnerInformationDataForm> = (data) => {
    const totalOwnership = data.owners.reduce(
      (sum, owner) => sum + owner.ownerPercentOwnership,
      0
    );
    if (formDataAll?.businessProfileOwnershipType !== "Partnership") {
      if (totalOwnership < 49) {
        setModalError("The sum of the ownership percentages must be 51%");
        setIsModalOpen(true);
        return;
      }
      if (totalOwnership > 100) {
        setModalError("The sum of the percentages must be 100%");
        setIsModalOpen(true);
        return;
      }
    } else {
      if (data.owners.length !== 2) {
        setModalError("The Partnership must have 2 owners");
        setIsModalOpen(true);
        return;
      }
      if (totalOwnership !== 100) {
        setModalError("The sum of the percentages must be 100%");
        setIsModalOpen(true);
        return;
      }
    }

    //console.log("data", data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  // Mantén tu useEffect original pero modifícalo como se indica
  useEffect(() => {
    // Iterar sobre los propietarios en formData
    formData?.owners?.forEach((owner, idx) => {
      if (owner.ownerBirthday) {
        const formattedDate = new Date(owner.ownerBirthday)
          .toISOString()
          .split("T")[0];
        const dateObject = new Date(formattedDate);
        if (!isNaN(dateObject.getTime())) {
          // Check if the date is valid
          setValue(`owners.${idx}.ownerBirthday`, formattedDate);
        } else {
          console.error("Invalid date:", formattedDate);
        }
      }
    });
  }, [formData?.owners, setValue]);

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <Accordion
        allowToggle
        index={openIndex}
        onChange={(index) =>
          setOpenIndex(Array.isArray(index) ? index : [index])
        }
      >
        <VStack spacing={4} alignItems={"right"}>
          {fields.map((field, index) => (
            <AccordionItem key={field.id} w={"100%"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text color={"text.highEmphasis"} fontWeight={"bold"}>
                      Owner {index + 1}
                    </Text>
                  </Box>
                  <HStack>
                    {fields.length > 1 && (
                      <ButtonGroup size="sm" isAttached variant="outline">
                        <IconButton
                          border={"none"}
                          onClick={() => remove(index)}
                          aria-label="Remove Owner"
                          icon={<DeleteIcon color={"neutral.700"} />}
                        />
                      </ButtonGroup>
                    )}
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <HStack spacing={4}>
                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerFirstName}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerFirstName`}>
                      First Name
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerFirstName`}
                      type="text"
                      placeholder="Enter the first name"
                      {...register(`owners.${index}.ownerFirstName`)}
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerFirstName?.message}
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerMiddleName}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerMiddleName`}>
                      Middle Name
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerMiddleName`}
                      type="text"
                      placeholder="Enter the middle name"
                      {...register(`owners.${index}.ownerMiddleName`)}
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerMiddleName?.message}
                    />
                  </FormControl>
                </HStack>

                <HStack spacing={4}>
                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerLastName}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerLastName`}>
                      Last Name
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerLastName`}
                      type="text"
                      placeholder="Enter the last name"
                      {...register(`owners.${index}.ownerLastName`)}
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerLastName?.message}
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerStateID}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerStateID`}>
                      Driver Licence / State ID / Passport Number
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerStateID`}
                      type="text"
                      placeholder="Enter the Driver Licence / State ID / Passport Number"
                      {...register(`owners.${index}.ownerStateID`)}
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerStateID?.message}
                    />
                  </FormControl>
                </HStack>

                <HStack spacing={4}>
                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerSSN}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerSSN`}>
                      SSN
                    </FormLabel>
                    <Input
                      as={InputMask}
                      mask="***-**-****"
                      maskChar={null}
                      id={`owners.${index}.ownerSSN`}
                      type="text"
                      placeholder="Enter SSN"
                      {...register(`owners.${index}.ownerSSN`)}
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerSSN?.message}
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerPercentOwnership}
                  >
                    <FormLabel
                      htmlFor={`owners.${index}.ownerPercentOwnership`}
                    >
                      Ownership %
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerPercentOwnership`}
                      type="number"
                      placeholder="Enter ownership %"
                      onInput={(e) => handleMaxInput(e,3)}
                      {...register(`owners.${index}.ownerPercentOwnership`)}
                    />
                    <ErrorMessage
                      error={
                        errors.owners?.[index]?.ownerPercentOwnership?.message
                      }
                    />
                  </FormControl>
                </HStack>

                <HStack spacing={4}>
                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerTitle}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerTitle`}>
                      Job Title
                    </FormLabel>
                    <Select
                      id={`owners.${index}.ownerTitle`}
                      placeholder="Select your Job Title"
                      {...register(`owners.${index}.ownerTitle`)}
                    >
                      <option value="CEO">CEO</option>
                      <option value="Owner">Owner</option>
                      <option value="President">President</option>
                      <option value="Vice President">Vice President</option>
                      <option value="Chairman">Chairman</option>
                      <option value="Other">Other</option>
                    </Select>
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerTitle?.message}
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerBirthday}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerBirthday`}>
                      Birthday
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerBirthday`}
                      type="date"
                      placeholder="Enter birthday"
                      {...register(`owners.${index}.ownerBirthday`, {
                        valueAsDate: false,
                      })}
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerBirthday?.message}
                    />
                  </FormControl>
                </HStack>

                <HStack spacing={4}>
                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerEmail}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerEmail`}>
                      Email
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerEmail`}
                      type="text"
                      placeholder="Enter email"
                      {...register(`owners.${index}.ownerEmail`)}
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerEmail?.message}
                    />
                  </FormControl>

                  <FormControl mb={4} isInvalid={!!errors.owners?.[index]?.ownerAddress}>
                    <FormLabel htmlFor={`owners.${index}.ownerAddress`} color={theme.colors.gray[700]}>
                      Legal Address
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerAddress`}
                      type="text"
                      placeholder="Enter your owner address"
                      {...register(`owners.${index}.ownerAddress`, {
                        onChange: (e) => {
                          setQuery(e.target.value);
                          // setValue("corpLegalAddress", e.target.value);
                          setIsAddressValid(false);
                        },
                      })}
                      onBlur={() => setSuggestions([])}
                    />
                    <ErrorMessage error={errors.owners?.[index]?.ownerAddress?.message} />
                    {suggestions.length > 0 && (
                      <List>
                        {suggestions.map((suggestion, sugestion_index) => (
                          <ListItem
                            key={sugestion_index}
                            onMouseDown={() => {
                              handleAddressSelect(suggestion, index);
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
                </HStack>

                <HStack spacing={4}>
                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerCity}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerCity`}>
                      City
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerCity`}
                      type="text"
                      placeholder="Enter owner city"
                      {...register(`owners.${index}.ownerCity`)}
                      readOnly
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerCity?.message}
                    />
                  </FormControl>

                  <FormControl isInvalid={!!errors.owners?.[index]?.ownerZip}>
                    <FormLabel htmlFor={`owners.${index}.ownerZip`} color={theme.colors.gray[700]}>
                      Owner ZIP Code
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerZip`}
                      type="text"
                      placeholder="Enter your owner ZIP code"
                      // value={corpLegalZip}
                      readOnly
                      {...register(`owners.${index}.ownerZip`)}
                    />
                    <ErrorMessage error={errors.owners?.[index]?.ownerZip?.message} />
                  </FormControl>
                </HStack>

                <HStack spacing={4}>
                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerPhone}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerPhone`}>
                      Phone
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerPhone`}
                      type="number"
                      placeholder="Enter owner phone"
                      onInput={(e) => handleMaxInput(e,10)}
                      {...register(`owners.${index}.ownerPhone`)}
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerPhone?.message}
                    />
                  </FormControl>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          ))}

          <Box mt={4}>
            <HStack justify="flex-end">
              <Link
                color="brand.primary"
                fontWeight="bold"
                onClick={handleAddOwner} // Usamos la función de validación antes de agregar
                display="inline-flex"
                alignItems="center"
                _hover={{ textDecoration: "none", color: "brand.secondary" }}
              >
                <Icon as={AddIcon} mr={2} />
                Add Owner
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Accordion>
      {/* Modal de validación */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Incomplete Form</ModalHeader>
          <ModalBody>
            {modalError}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={() => setIsModalOpen(false)}>
              Got it
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default OwnerInformationForm;
