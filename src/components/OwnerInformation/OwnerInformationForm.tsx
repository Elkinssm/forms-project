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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import ZipInput from "../FormComponents/ZipInputField";

// TODO Validar que la suma de todos los owners sea del 50%

const schema = z.object({
  owners: z.array(
    z.object({
      ownerFirstName: z
        .string()
        .min(2, "The Owner First Name must be at least 2 chars"),
      ownerMiddleName: z
        .string()
        .min(2, "The Owner Middle Name must be at least 2 chars"),
      ownerLastName: z
        .string()
        .min(2, "The Owner Last Name must be at least 2 chars"),
      ownerStateID: z.string().min(2, "The stateID must be at least 2 chars"),
      ownerSSN: z.string().min(9, "The SSN must be at least 9 chars"),
      ownerPercentOwnership: z.preprocess(
        (val) => Number(val),
        z.number().int().min(1, "Percent Ownership must be at least 1")
      ),
      ownerTitle: z.string().min(9, "The Title must be at least 9 chars"),
      ownerBirthday: z.coerce.date().refine((data) => data < new Date(), {
        message: "Birthday must be in the past",
      }),
      ownerEmail: z.string().email("A valid email is required"),
      ownerAddress: z
        .string()
        .min(10, "The address must be at least 10 characters long"),
      ownerCity: z
        .string()
        .min(3, "The city must be at least 3 characters long"),
      ownerZip: z.string().min(5, "The zip must be at least 5 characters long"),
      ownerPhone: z
        .string()
        .min(10, "The phone must be at least 10 characters long"),
      controllerOfficerIsOwner: z.boolean(),
    })
  ),
});

type OwnerInformationDataForm = z.infer<typeof schema>;

interface OwnerInformationFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: OwnerInformationDataForm) => void;
  formData?: OwnerInformationDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
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
        ownerBirthday: new Date(),
        ownerEmail: "",
        ownerAddress: "",
        ownerCity: "",
        ownerZip: "",
        ownerPhone: "",
        controllerOfficerIsOwner: false,
      },
    ],
  },
  formRef,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<OwnerInformationDataForm>({
    resolver: zodResolver(schema),
    defaultValues: formData,
    mode: "onChange",
  });

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
      ownerBirthday: new Date(),
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
        ownerBirthday: new Date(),
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
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

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
                      {...register(`owners.${index}.ownerBirthday`)}
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
                      type="text"
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
    </Box>
  );
};

export default OwnerInformationForm;
