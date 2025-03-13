import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Button,
  HStack,
  Icon,
  Link,
  VisuallyHidden,
  VStack,
  Text,
  ButtonGroup,
  IconButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import ErrorMessage from "../../FormComponents/ErrorMessage";

import AddressInput from "../../FormComponents/AddressInput";

import { z } from "zod";
import contactSchema from "./contactSchema";
import { formDataContact } from "./contactData";
import AllDataMozartForm from "../../../utils/AllDataMozartForm";

type ContactDataForm = z.infer<typeof contactSchema>;

interface ContactFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: ContactDataForm) => void;
  formData?: ContactDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof contactSchema;
  formDataAll?: AllDataMozartForm;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onNext,
  onDataChange,
  formData = formDataContact,
  validationSchema = contactSchema,
  formRef,
}) => {
  const methods = useForm<ContactDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = methods;

  const onSubmit: SubmitHandler<ContactDataForm> = (data) => {
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts",
  });

  const [openIndex, setOpenIndex] = useState<number[]>([0]);

  if (fields.length === 0) {
    append(formDataContact.contacts);
  }

  const handleAddOwner = async () => {
    const isFormValid = await trigger(); // Ejecutar validación de formulario
    if (isFormValid) {
      append(formDataContact.contacts);
      setOpenIndex([fields.length]);
    }
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof ContactDataForm["contacts"][number]
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue(`contacts.${index}.${field}`, base64String);
        console.log(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormProvider {...methods}>
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
                        Contact {index + 1}
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
                  <FormControl
                    mb={4}
                    isInvalid={!!errors.contacts?.[index]?.contactDetailsId}
                  >
                    <FormLabel htmlFor={`contacts[${index}].contactDetailsId`}>
                      Contact Id
                    </FormLabel>
                    <Input
                      id={`contacts[${index}].contactDetailsId`}
                      type="text"
                      placeholder="Enter the Contact Id"
                      {...methods.register(
                        `contacts.${index}.contactDetailsId`
                      )}
                    />
                    <ErrorMessage
                      error={
                        errors.contacts?.[index]?.contactDetailsId?.message
                      }
                    />
                  </FormControl>
                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.contacts?.[index]?.contactDetailsContactType
                    }
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsContactType`}
                    >
                      Contact Type
                    </FormLabel>
                    <Input
                      id={`contacts[${index}].contactDetailsContactType`}
                      type="text"
                      placeholder="Enter the Contact Type"
                      {...methods.register(
                        `contacts.${index}.contactDetailsContactType`
                      )}
                    />
                    <ErrorMessage
                      error={
                        errors.contacts?.[index]?.contactDetailsContactType
                          ?.message
                      }
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.contacts?.[index]?.contactDetailsFirstName
                    }
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsFirstName`}
                    >
                      First Name
                    </FormLabel>
                    <Input
                      id={`contacts[${index}].contactDetailsFirstName`}
                      type="text"
                      placeholder="Enter the First Name"
                      {...methods.register(
                        `contacts.${index}.contactDetailsFirstName`
                      )}
                    />
                    <ErrorMessage
                      error={
                        errors.contacts?.[index]?.contactDetailsFirstName
                          ?.message
                      }
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.contacts?.[index]?.contactDetailsLastName
                    }
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsLastName`}
                    >
                      Last Name
                    </FormLabel>
                    <Input
                      id={`contacts[${index}].contactDetailsLastName`}
                      type="text"
                      placeholder="Enter the Last Name"
                      {...methods.register(
                        `contacts.${index}.contactDetailsLastName`
                      )}
                    />
                    <ErrorMessage
                      error={
                        errors.contacts?.[index]?.contactDetailsLastName
                          ?.message
                      }
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.contacts?.[index]?.contactDetailsLegalName
                    }
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsLegalName`}
                    >
                      Legal Name
                    </FormLabel>
                    <Input
                      id={`contacts[${index}].contactDetailsLegalName`}
                      type="text"
                      placeholder="Enter the Legal Name"
                      {...methods.register(
                        `contacts.${index}.contactDetailsLegalName`
                      )}
                    />
                    <ErrorMessage
                      error={
                        errors.contacts?.[index]?.contactDetailsLegalName
                          ?.message
                      }
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={!!errors.contacts?.[index]?.contactDetailsEmail}
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsEmail`}
                    >
                      Email
                    </FormLabel>
                    <Input
                      id={`contacts[${index}].contactDetailsEmail`}
                      type="email"
                      placeholder="Enter the Email"
                      {...methods.register(
                        `contacts.${index}.contactDetailsEmail`
                      )}
                    />
                    <ErrorMessage
                      error={
                        errors.contacts?.[index]?.contactDetailsEmail?.message
                      }
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.contacts?.[index]?.contactDetailsMobilePhone
                    }
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsMobilePhone`}
                    >
                      Mobile Phone
                    </FormLabel>
                    <Input
                      id={`contacts[${index}].contactDetailsMobilePhone`}
                      type="text"
                      placeholder="Enter the Mobile Phone"
                      {...methods.register(
                        `contacts.${index}.contactDetailsMobilePhone`
                      )}
                    />
                    <ErrorMessage
                      error={
                        errors.contacts?.[index]?.contactDetailsMobilePhone
                          ?.message
                      }
                    />
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.contacts?.[index]?.contactDetailsHomePhone
                    }
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsHomePhone`}
                    >
                      Home Phone
                    </FormLabel>
                    <Input
                      id={`contacts[${index}].contactDetailsHomePhone`}
                      type="text"
                      placeholder="Enter the Home Phone"
                      {...methods.register(
                        `contacts.${index}.contactDetailsHomePhone`
                      )}
                    />
                    <ErrorMessage
                      error={
                        errors.contacts?.[index]?.contactDetailsHomePhone
                          ?.message
                      }
                    />
                  </FormControl>

                  <AddressInput
                    name={`contacts[${index}].contactDetailsAddress`}
                    label="Contact Address"
                    placeholder="Enter your address"
                    error={
                      errors.contacts?.[index]?.contactDetailsAddress?.street
                    }
                  />
                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.contacts?.[index]?.contactDetailsCustomField1
                    }
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsCustomField1`}
                    >
                      Custom Field 1
                    </FormLabel>
                    <VStack spacing={4} align="center">
                      <Button
                        as="label"
                        htmlFor={`contacts[${index}].contactDetailsCustomField1`}
                        colorScheme="teal"
                        cursor="pointer"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`contacts[${index}].contactDetailsCustomField1`}
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleImageUpload(
                              e,
                              index,
                              "contactDetailsCustomField1"
                            )
                          }
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.contacts?.[index]?.contactDetailsCustomField1
                            ?.message
                        }
                      />
                    </VStack>
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.contacts?.[index]?.contactDetailsCustomField2
                    }
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsCustomField2`}
                    >
                      Custom Field 2
                    </FormLabel>
                    <VStack spacing={4} align="center">
                      <Button
                        as="label"
                        htmlFor={`contacts[${index}].contactDetailsCustomField2`}
                        colorScheme="teal"
                        cursor="pointer"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`contacts[${index}].contactDetailsCustomField2`}
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleImageUpload(
                              e,
                              index,
                              "contactDetailsCustomField2"
                            )
                          }
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.contacts?.[index]?.contactDetailsCustomField2
                            ?.message
                        }
                      />
                    </VStack>
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={
                      !!errors.contacts?.[index]?.contactDetailsCustomField3
                    }
                  >
                    <FormLabel
                      htmlFor={`contacts[${index}].contactDetailsCustomField3`}
                    >
                      Custom Field 3
                    </FormLabel>
                    <VStack spacing={4} align="center">
                      <Button
                        as="label"
                        htmlFor={`contacts[${index}].contactDetailsCustomField3`}
                        colorScheme="teal"
                        cursor="pointer"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`contacts[${index}].contactDetailsCustomField3`}
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleImageUpload(
                              e,
                              index,
                              "contactDetailsCustomField3"
                            )
                          }
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.contacts?.[index]?.contactDetailsCustomField3
                            ?.message
                        }
                      />
                    </VStack>
                  </FormControl>
                </AccordionPanel>
              </AccordionItem>
            ))}
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
          </VStack>
        </Accordion>
      </Box>
    </FormProvider>
  );
};

export default ContactForm;
