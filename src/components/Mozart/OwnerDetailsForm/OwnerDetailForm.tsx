import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  HStack,
  VStack,
  IconButton,
  ButtonGroup,
  Text,
  VisuallyHidden,
  FormControl,
  FormLabel,
  Input,
  Icon,
  Link,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import {
  useForm,
  FormProvider,
  useFieldArray,
  SubmitHandler,
  FieldError,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ownerDetailsSchema } from "./ownerDetailsSchema";
import { ownerDetailsData } from "../OwnerDetailsForm/ownerDetailData";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import * as yup from "yup";
import AllDataMozartForm from "../../../utils/AllDataMozartForm";
import AddressInput from "../../FormComponents/AddressInput";

// Definimos un esquema que engloba un array de owners
const schema = yup.object({
  owners: yup.array().of(ownerDetailsSchema),
});

export type OwnerDetailsFormValues = yup.InferType<typeof schema>;

interface OwnerDetailsFormProps {
  title: string;
  description?: string;
  onBack?: () => void;
  onNext?: () => void;
  onDataChange?: (data: OwnerDetailsFormValues) => void;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof ownerDetailsSchema;
  formDataAll?: AllDataMozartForm;
}

const OwnerDetailsForm: React.FC<OwnerDetailsFormProps> = ({
  onNext,
  onDataChange,
  formRef,
}) => {
  const methods = useForm<OwnerDetailsFormValues>({
    resolver: yupResolver(schema),
    defaultValues: { owners: [ownerDetailsData] },
    mode: "onChange",
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "owners",
  });

  // Control del Accordion: inicialmente se abre el primer item
  const [openIndex, setOpenIndex] = useState<number[]>([0]);

  const onSubmit: SubmitHandler<OwnerDetailsFormValues> = (data) => {
    console.log("Form Data:", data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  type DocumentFieldPath =
    | "ownerDetailsDocuments.proofOfId"
    | "ownerDetailsDocuments.proofOfAddress"
    | "ownerDetailsDocuments.personalGuarantee"
    | "ownerDetailsDocuments.customDocument1"
    | "ownerDetailsDocuments.customDocument2"
    | "ownerDetailsDocuments.customDocument3"
    | "ownerDetailsDocuments.driversLicenseFront"
    | "ownerDetailsDocuments.driversLicenseBack";
  // Handler genérico para subir archivos en campos anidados (documentos)
  const handleFileUpload =
    (index: number, fieldPath: DocumentFieldPath) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setValue(
            `owners.${index}.${fieldPath}` as const,
            {
              fileName: file.name,
              fileBody: reader.result as string,
            },
            { shouldValidate: true }
          );
        };
        reader.readAsDataURL(file);
      }
    };

  const handleAddOwner = async () => {
    const valid = await trigger();
    if (valid) {
      append(ownerDetailsData);
      setOpenIndex([fields.length]); // Abrir el nuevo formulario agregado
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
          <VStack spacing={4} alignItems="stretch">
            {fields.map((field, index) => (
              <AccordionItem key={field.id || index}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="bold">Owner {index + 1}</Text>
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
                  {/* --- Basic Information --- */}
                  <Box mb={4}>
                    <FormControl isInvalid={!!errors.owners?.[index]?.id}>
                      <FormLabel htmlFor={`owners.${index}.id`}>ID</FormLabel>
                      <Input
                        id={`owners.${index}.id`}
                        {...register(`owners.${index}.id` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.id?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.firstName}
                    >
                      <FormLabel htmlFor={`owners.${index}.firstName`}>
                        First Name
                      </FormLabel>
                      <Input
                        id={`owners.${index}.firstName`}
                        {...register(`owners.${index}.firstName` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.firstName?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl isInvalid={!!errors.owners?.[index]?.lastName}>
                      <FormLabel htmlFor={`owners.${index}.lastName`}>
                        Last Name
                      </FormLabel>
                      <Input
                        id={`owners.${index}.lastName`}
                        {...register(`owners.${index}.lastName` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.lastName?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl isInvalid={!!errors.owners?.[index]?.idNumber}>
                      <FormLabel htmlFor={`owners.${index}.idNumber`}>
                        ID Number
                      </FormLabel>
                      <Input
                        id={`owners.${index}.idNumber`}
                        {...register(`owners.${index}.idNumber` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.idNumber?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl isInvalid={!!errors.owners?.[index]?.giin}>
                      <FormLabel htmlFor={`owners.${index}.giin`}>
                        GIIN
                      </FormLabel>
                      <Input
                        id={`owners.${index}.giin`}
                        {...register(`owners.${index}.giin` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.giin?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl isInvalid={!!errors.owners?.[index]?.email}>
                      <FormLabel htmlFor={`owners.${index}.email`}>
                        Email
                      </FormLabel>
                      <Input
                        id={`owners.${index}.email`}
                        type="email"
                        {...register(`owners.${index}.email` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.email?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.mobilePhone}
                    >
                      <FormLabel htmlFor={`owners.${index}.mobilePhone`}>
                        Mobile Phone
                      </FormLabel>
                      <Input
                        id={`owners.${index}.mobilePhone`}
                        {...register(`owners.${index}.mobilePhone` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.mobilePhone?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.homePhone}
                    >
                      <FormLabel htmlFor={`owners.${index}.homePhone`}>
                        Home Phone
                      </FormLabel>
                      <Input
                        id={`owners.${index}.homePhone`}
                        {...register(`owners.${index}.homePhone` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.homePhone?.message}
                      />
                    </FormControl>
                  </Box>

                  {/* --- Address ---
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.address?.street}
                    >
                      <FormLabel htmlFor={`owners.${index}.address.street`}>
                        Street
                      </FormLabel>
                      <Input
                        id={`owners.${index}.address.street`}
                        {...register(`owners.${index}.address.street` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.address?.street?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.address?.apartment}
                    >
                      <FormLabel htmlFor={`owners.${index}.address.apartment`}>
                        Apartment
                      </FormLabel>
                      <Input
                        id={`owners.${index}.address.apartment`}
                        {...register(
                          `owners.${index}.address.apartment` as const
                        )}
                      />
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.address?.apartment?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.address?.city}
                    >
                      <FormLabel htmlFor={`owners.${index}.address.city`}>
                        City
                      </FormLabel>
                      <Input
                        id={`owners.${index}.address.city`}
                        {...register(`owners.${index}.address.city` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.address?.city?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.address?.country}
                    >
                      <FormLabel htmlFor={`owners.${index}.address.country`}>
                        Country
                      </FormLabel>
                      <Input
                        id={`owners.${index}.address.country`}
                        {...register(
                          `owners.${index}.address.country` as const
                        )}
                      />
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.address?.country?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.address?.stateCode}
                    >
                      <FormLabel htmlFor={`owners.${index}.address.stateCode`}>
                        State Code
                      </FormLabel>
                      <Input
                        id={`owners.${index}.address.stateCode`}
                        {...register(
                          `owners.${index}.address.stateCode` as const
                        )}
                      />
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.address?.stateCode?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.address?.zip}
                    >
                      <FormLabel htmlFor={`owners.${index}.address.zip`}>
                        ZIP
                      </FormLabel>
                      <Input
                        id={`owners.${index}.address.zip`}
                        {...register(`owners.${index}.address.zip` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.address?.zip?.message}
                      />
                    </FormControl>
                  </Box> */}
                  {/* --- Address --- */}
                  <AddressInput
                    name={`owners.${index}.address`}
                    label="Address"
                    placeholder="Enter address"
                    error={
                      errors.owners?.[index]?.address as FieldError | undefined
                    }
                  />

                  {/* --- Dates & Ownership --- */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.dateOfBirth}
                    >
                      <FormLabel htmlFor={`owners.${index}.dateOfBirth`}>
                        Date of Birth
                      </FormLabel>
                      <Input
                        id={`owners.${index}.dateOfBirth`}
                        type="date"
                        {...register(`owners.${index}.dateOfBirth` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.dateOfBirth?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl isInvalid={!!errors.owners?.[index]?.position}>
                      <FormLabel htmlFor={`owners.${index}.position`}>
                        Position
                      </FormLabel>
                      <Input
                        id={`owners.${index}.position`}
                        {...register(`owners.${index}.position` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.position?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.citizenship}
                    >
                      <FormLabel htmlFor={`owners.${index}.citizenship`}>
                        Citizenship
                      </FormLabel>
                      <Input
                        id={`owners.${index}.citizenship`}
                        {...register(`owners.${index}.citizenship` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.citizenship?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.ownershipDate}
                    >
                      <FormLabel htmlFor={`owners.${index}.ownershipDate`}>
                        Ownership Date
                      </FormLabel>
                      <Input
                        id={`owners.${index}.ownershipDate`}
                        type="date"
                        {...register(`owners.${index}.ownershipDate` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.ownershipDate?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.ownershipPercentage}
                    >
                      <FormLabel
                        htmlFor={`owners.${index}.ownershipPercentage`}
                      >
                        Ownership Percentage
                      </FormLabel>
                      <Input
                        id={`owners.${index}.ownershipPercentage`}
                        type="number"
                        {...register(
                          `owners.${index}.ownershipPercentage` as const
                        )}
                      />
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.ownershipPercentage?.message
                        }
                      />
                    </FormControl>
                  </Box>

                  {/* --- Driver's License Details --- */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.driversLicenceNumber}
                    >
                      <FormLabel
                        htmlFor={`owners.${index}.driversLicenceNumber`}
                      >
                        Driver's Licence Number
                      </FormLabel>
                      <Input
                        id={`owners.${index}.driversLicenceNumber`}
                        {...register(
                          `owners.${index}.driversLicenceNumber` as const
                        )}
                      />
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.driversLicenceNumber?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={
                        !!errors.owners?.[index]?.driversLicenceCountry
                      }
                    >
                      <FormLabel
                        htmlFor={`owners.${index}.driversLicenceCountry`}
                      >
                        Driver's Licence Country
                      </FormLabel>
                      <Input
                        id={`owners.${index}.driversLicenceCountry`}
                        {...register(
                          `owners.${index}.driversLicenceCountry` as const
                        )}
                      />
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.driversLicenceCountry?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.driversLicenceState}
                    >
                      <FormLabel
                        htmlFor={`owners.${index}.driversLicenceState`}
                      >
                        Driver's Licence State
                      </FormLabel>
                      <Input
                        id={`owners.${index}.driversLicenceState`}
                        {...register(
                          `owners.${index}.driversLicenceState` as const
                        )}
                      />
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.driversLicenceState?.message
                        }
                      />
                    </FormControl>
                  </Box>

                  {/* --- Custom Fields --- */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.customField1}
                    >
                      <FormLabel htmlFor={`owners.${index}.customField1`}>
                        Custom Field 1
                      </FormLabel>
                      <Input
                        id={`owners.${index}.customField1`}
                        {...register(`owners.${index}.customField1` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.customField1?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.customField2}
                    >
                      <FormLabel htmlFor={`owners.${index}.customField2`}>
                        Custom Field 2
                      </FormLabel>
                      <Input
                        id={`owners.${index}.customField2`}
                        {...register(`owners.${index}.customField2` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.customField2?.message}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.customField3}
                    >
                      <FormLabel htmlFor={`owners.${index}.customField3`}>
                        Custom Field 3
                      </FormLabel>
                      <Input
                        id={`owners.${index}.customField3`}
                        {...register(`owners.${index}.customField3` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.customField3?.message}
                      />
                    </FormControl>
                  </Box>

                  {/* --- Control Prong --- */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={!!errors.owners?.[index]?.controlProng}
                    >
                      <FormLabel htmlFor={`owners.${index}.controlProng`}>
                        Control Prong
                      </FormLabel>
                      <Input
                        id={`owners.${index}.controlProng`}
                        type="checkbox"
                        {...register(`owners.${index}.controlProng` as const)}
                      />
                      <ErrorMessage
                        error={errors.owners?.[index]?.controlProng?.message}
                      />
                    </FormControl>
                  </Box>

                  {/* --- Documents --- */}
                  {/* Proof of ID */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={
                        !!errors.owners?.[index]?.ownerDetailsDocuments
                          ?.proofOfId?.fileName
                      }
                    >
                      <FormLabel htmlFor={`proofOfId-${index}`}>
                        Proof of ID File Name
                      </FormLabel>
                      <Button
                        as="label"
                        htmlFor={`proofOfId-${index}`}
                        colorScheme="teal"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`proofOfId-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload(
                            index,
                            "ownerDetailsDocuments.proofOfId"
                          )}
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.ownerDetailsDocuments
                            ?.proofOfId?.fileName?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  {/* Proof of Address */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={
                        !!errors.owners?.[index]?.ownerDetailsDocuments
                          ?.proofOfAddress?.fileName
                      }
                    >
                      <FormLabel htmlFor={`proofOfAddress-${index}`}>
                        Proof of Address File Name
                      </FormLabel>
                      <Button
                        as="label"
                        htmlFor={`proofOfAddress-${index}`}
                        colorScheme="teal"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`proofOfAddress-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload(
                            index,
                            "ownerDetailsDocuments.proofOfAddress"
                          )}
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.ownerDetailsDocuments
                            ?.proofOfAddress?.fileName?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  {/* Personal Guarantee */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={
                        !!errors.owners?.[index]?.ownerDetailsDocuments
                          ?.personalGuarantee?.fileName
                      }
                    >
                      <FormLabel htmlFor={`personalGuarantee-${index}`}>
                        Personal Guarantee File Name
                      </FormLabel>
                      <Button
                        as="label"
                        htmlFor={`personalGuarantee-${index}`}
                        colorScheme="teal"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`personalGuarantee-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload(
                            index,
                            "ownerDetailsDocuments.personalGuarantee"
                          )}
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.ownerDetailsDocuments
                            ?.personalGuarantee?.fileName?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  {/* Custom Document 1 */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={
                        !!errors.owners?.[index]?.ownerDetailsDocuments
                          ?.customDocument1?.fileName
                      }
                    >
                      <FormLabel htmlFor={`customDocument1-${index}`}>
                        Custom Document 1 File Name
                      </FormLabel>
                      <Button
                        as="label"
                        htmlFor={`customDocument1-${index}`}
                        colorScheme="teal"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`customDocument1-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload(
                            index,
                            "ownerDetailsDocuments.customDocument1"
                          )}
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.ownerDetailsDocuments
                            ?.customDocument1?.fileName?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  {/* Custom Document 2 */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={
                        !!errors.owners?.[index]?.ownerDetailsDocuments
                          ?.customDocument2?.fileName
                      }
                    >
                      <FormLabel htmlFor={`customDocument2-${index}`}>
                        Custom Document 2 File Name
                      </FormLabel>
                      <Button
                        as="label"
                        htmlFor={`customDocument2-${index}`}
                        colorScheme="teal"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`customDocument2-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload(
                            index,
                            "ownerDetailsDocuments.customDocument2"
                          )}
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.ownerDetailsDocuments
                            ?.customDocument2?.fileName?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  {/* Custom Document 3 */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={
                        !!errors.owners?.[index]?.ownerDetailsDocuments
                          ?.customDocument3?.fileName
                      }
                    >
                      <FormLabel htmlFor={`customDocument3-${index}`}>
                        Custom Document 3 File Name
                      </FormLabel>
                      <Button
                        as="label"
                        htmlFor={`customDocument3-${index}`}
                        colorScheme="teal"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`customDocument3-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload(
                            index,
                            "ownerDetailsDocuments.customDocument3"
                          )}
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.ownerDetailsDocuments
                            ?.customDocument3?.fileName?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  {/* Driver's License Front */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={
                        !!errors.owners?.[index]?.ownerDetailsDocuments
                          ?.driversLicenseFront?.fileName
                      }
                    >
                      <FormLabel htmlFor={`driversLicenseFront-${index}`}>
                        Driver's License Front File Name
                      </FormLabel>
                      <Button
                        as="label"
                        htmlFor={`driversLicenseFront-${index}`}
                        colorScheme="teal"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`driversLicenseFront-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload(
                            index,
                            "ownerDetailsDocuments.driversLicenseFront"
                          )}
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.ownerDetailsDocuments
                            ?.driversLicenseFront?.fileName?.message
                        }
                      />
                    </FormControl>
                  </Box>
                  {/* Driver's License Back */}
                  <Box mb={4}>
                    <FormControl
                      isInvalid={
                        !!errors.owners?.[index]?.ownerDetailsDocuments
                          ?.driversLicenseBack?.fileName
                      }
                    >
                      <FormLabel htmlFor={`driversLicenseBack-${index}`}>
                        Driver's License Back File Name
                      </FormLabel>
                      <Button
                        as="label"
                        htmlFor={`driversLicenseBack-${index}`}
                        colorScheme="teal"
                      >
                        Choose File
                      </Button>
                      <VisuallyHidden>
                        <Input
                          id={`driversLicenseBack-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload(
                            index,
                            "ownerDetailsDocuments.driversLicenseBack"
                          )}
                        />
                      </VisuallyHidden>
                      <ErrorMessage
                        error={
                          errors.owners?.[index]?.ownerDetailsDocuments
                            ?.driversLicenseBack?.fileName?.message
                        }
                      />
                    </FormControl>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            ))}
            <Link
              color="brand.primary"
              fontWeight="bold"
              onClick={handleAddOwner}
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

export default OwnerDetailsForm;
