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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import ZipInput from "../../FormComponents/ZipInputField";
import { ownerInformationScheme } from "./ownerInformationScheme";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import AllDataForm from "../../../utils/AllDataForm";

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
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<OwnerInformationDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
    mode: "onChange",
  });

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
      setOpenIndex([fields.length]); // Abrir el nuevo propietario agregado
      console.log("Current form data:", getValues());
    } else {
      console.log("Form validation failed. Cannot add new owner.");
    }
  };

  const onSubmit: SubmitHandler<OwnerInformationDataForm> = (data) => {
    console.log("data", data);
    const totalOwnership = data.owners.reduce(
      (sum, owner) => sum + owner.ownerPercentOwnership,
      0
    );
    debugger

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
    }else{
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
    
    console.log("data", data);
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
                      placeholder="Enter the State ID"
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

                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerAddress}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerAddress`}>
                      Address
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerAddress`}
                      type="text"
                      placeholder="Enter owner address"
                      {...register(`owners.${index}.ownerAddress`)}
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerAddress?.message}
                    />
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
                    />
                    <ErrorMessage
                      error={errors.owners?.[index]?.ownerCity?.message}
                    />
                  </FormControl>

                  <ZipInput
                    label="Owner zip code"
                    id={`owners.${index}.ownerZip`}
                    errors={errors}
                    register={register}
                  />
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
