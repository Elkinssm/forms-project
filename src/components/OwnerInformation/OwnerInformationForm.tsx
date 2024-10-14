import {
  Box,
  Checkbox,
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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import ZipInput from "../FormComponents/ZipInputField";
import { ownerInformationScheme } from "./ownerInformationScheme";

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
        controllerOfficerIsOwner: false,
      },
    ],
  },
  validationSchema = ownerInformationScheme,
  formRef,
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
      controllerOfficerIsOwner: false,
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
        controllerOfficerIsOwner: false,
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

    if (totalOwnership < 50) {
      console.error("The sum of the ownership percentages must be 50%");
      setIsModalOpen(true);
      return; // Aquí puedes manejar el error de manera adecuada
    }

    console.log("data", data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();

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
                    {errors.owners?.[index]?.ownerFirstName && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerFirstName?.message}
                      </Text>
                    )}
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
                    {errors.owners?.[index]?.ownerMiddleName && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerMiddleName?.message}
                      </Text>
                    )}
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
                    {errors.owners?.[index]?.ownerLastName && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerLastName?.message}
                      </Text>
                    )}
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerStateID}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerStateID`}>
                      State ID
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerStateID`}
                      type="text"
                      placeholder="Enter the State ID"
                      {...register(`owners.${index}.ownerStateID`)}
                    />
                    {errors.owners?.[index]?.ownerStateID && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerStateID?.message}
                      </Text>
                    )}
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
                    {errors.owners?.[index]?.ownerSSN && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerSSN?.message}
                      </Text>
                    )}
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
                    {errors.owners?.[index]?.ownerPercentOwnership && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerPercentOwnership?.message}
                      </Text>
                    )}
                  </FormControl>
                </HStack>

                <HStack spacing={4}>
                  <FormControl
                    mb={4}
                    isInvalid={!!errors.owners?.[index]?.ownerTitle}
                  >
                    <FormLabel htmlFor={`owners.${index}.ownerTitle`}>
                      Title
                    </FormLabel>
                    <Input
                      id={`owners.${index}.ownerTitle`}
                      type="text"
                      placeholder="Enter title"
                      {...register(`owners.${index}.ownerTitle`)}
                    />
                    {errors.owners?.[index]?.ownerTitle && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerTitle?.message}
                      </Text>
                    )}
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
                    {errors.owners?.[index]?.ownerBirthday && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerBirthday?.message}
                      </Text>
                    )}
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
                    {errors.owners?.[index]?.ownerEmail && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerEmail?.message}
                      </Text>
                    )}
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
                    {errors.owners?.[index]?.ownerAddress && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerAddress?.message}
                      </Text>
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
                    />
                    {errors.owners?.[index]?.ownerCity && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerCity?.message}
                      </Text>
                    )}
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
                    {errors.owners?.[index]?.ownerPhone && (
                      <Text color="red.500">
                        {errors.owners[index]?.ownerPhone?.message}
                      </Text>
                    )}
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.owners?.[index]?.controllerOfficerIsOwner
                    }
                  >
                    <FormLabel
                      htmlFor={`owners.${index}.controllerOfficerIsOwner`}
                    >
                      Is this owner the Controller Officer?
                    </FormLabel>
                    <Checkbox
                      id={`owners.${index}.controllerOfficerIsOwner`}
                      {...register(`owners.${index}.controllerOfficerIsOwner`)}
                    />
                    {errors.owners?.[index]?.controllerOfficerIsOwner && (
                      <Text color="red.500">
                        {
                          errors.owners[index]?.controllerOfficerIsOwner
                            ?.message
                        }
                      </Text>
                    )}
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
            The sum of the ownership percentages must be 50%
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
