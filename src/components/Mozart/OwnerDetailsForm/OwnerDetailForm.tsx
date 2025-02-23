import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  VStack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ownerDetailsSchema } from "./ownerDetailsSchema";
import { ownerDetailsData } from "../OwnerDetailsForm/ownerDetailData";
import ErrorMessage from "../../FormComponents/ErrorMessage";

type OwnerDetailsFormValues = yup.InferType<typeof ownerDetailsSchema>;

interface OwnerDetailsFormProps {
  title: string;
  description?: string;
  validationSchema?: typeof ownerDetailsSchema;
}

const OwnerDetailsForm: React.FC<OwnerDetailsFormProps> = ({
  title,
  description,
}) => {
  const methods = useForm<OwnerDetailsFormValues>({
    resolver: yupResolver(ownerDetailsSchema),
    defaultValues: ownerDetailsData,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<OwnerDetailsFormValues> = (data) => {
    console.log(data);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        console.log(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h2" size="lg" mb={4}>
          {title}
        </Heading>

        <FormControl mb={4} isInvalid={!!errors.id}>
          <FormLabel htmlFor="id">ID</FormLabel>
          <Input id="id" {...methods.register("id")} />
          <ErrorMessage error={errors.id?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.firstName}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input id="firstName" {...methods.register("firstName")} />
          <ErrorMessage error={errors.firstName?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.lastName}>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input id="lastName" {...methods.register("lastName")} />
          <ErrorMessage error={errors.lastName?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.idNumber}>
          <FormLabel htmlFor="idNumber">ID Number</FormLabel>
          <Input id="idNumber" {...methods.register("idNumber")} />
          <ErrorMessage error={errors.idNumber?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.giin}>
          <FormLabel htmlFor="giin">GIIN</FormLabel>
          <Input id="giin" {...methods.register("giin")} />
          <ErrorMessage error={errors.giin?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" {...methods.register("email")} />
          <ErrorMessage error={errors.email?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.mobilePhone}>
          <FormLabel htmlFor="mobilePhone">Mobile Phone</FormLabel>
          <Input id="mobilePhone" {...methods.register("mobilePhone")} />
          <ErrorMessage error={errors.mobilePhone?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.homePhone}>
          <FormLabel htmlFor="homePhone">Home Phone</FormLabel>
          <Input id="homePhone" {...methods.register("homePhone")} />
          <ErrorMessage error={errors.homePhone?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.address?.street}>
          <FormLabel htmlFor="address.street">Street</FormLabel>
          <Input id="address.street" {...methods.register("address.street")} />
          <ErrorMessage error={errors.address?.street?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.address?.apartment}>
          <FormLabel htmlFor="address.apartment">Apartment</FormLabel>
          <Input
            id="address.apartment"
            {...methods.register("address.apartment")}
          />
          <ErrorMessage error={errors.address?.apartment?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.address?.city}>
          <FormLabel htmlFor="address.city">City</FormLabel>
          <Input id="address.city" {...methods.register("address.city")} />
          <ErrorMessage error={errors.address?.city?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.address?.country}>
          <FormLabel htmlFor="address.country">Country</FormLabel>
          <Input
            id="address.country"
            {...methods.register("address.country")}
          />
          <ErrorMessage error={errors.address?.country?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.address?.stateCode}>
          <FormLabel htmlFor="address.stateCode">State Code</FormLabel>
          <Input
            id="address.stateCode"
            {...methods.register("address.stateCode")}
          />
          <ErrorMessage error={errors.address?.stateCode?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.address?.zip}>
          <FormLabel htmlFor="address.zip">ZIP</FormLabel>
          <Input id="address.zip" {...methods.register("address.zip")} />
          <ErrorMessage error={errors.address?.zip?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.dateOfBirth}>
          <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
          <Input
            id="dateOfBirth"
            type="date"
            {...methods.register("dateOfBirth")}
          />
          <ErrorMessage error={errors.dateOfBirth?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.position}>
          <FormLabel htmlFor="position">Position</FormLabel>
          <Input id="position" {...methods.register("position")} />
          <ErrorMessage error={errors.position?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.citizenship}>
          <FormLabel htmlFor="citizenship">Citizenship</FormLabel>
          <Input id="citizenship" {...methods.register("citizenship")} />
          <ErrorMessage error={errors.citizenship?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.ownershipDate}>
          <FormLabel htmlFor="ownershipDate">Ownership Date</FormLabel>
          <Input
            id="ownershipDate"
            type="date"
            {...methods.register("ownershipDate")}
          />
          <ErrorMessage error={errors.ownershipDate?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.ownershipPercentage}>
          <FormLabel htmlFor="ownershipPercentage">
            Ownership Percentage
          </FormLabel>
          <Input
            id="ownershipPercentage"
            type="number"
            {...methods.register("ownershipPercentage")}
          />
          <ErrorMessage error={errors.ownershipPercentage?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.driversLicenceNumber}>
          <FormLabel htmlFor="driversLicenceNumber">
            Driver's Licence Number
          </FormLabel>
          <Input
            id="driversLicenceNumber"
            {...methods.register("driversLicenceNumber")}
          />
          <ErrorMessage error={errors.driversLicenceNumber?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.driversLicenceCountry}>
          <FormLabel htmlFor="driversLicenceCountry">
            Driver's Licence Country
          </FormLabel>
          <Input
            id="driversLicenceCountry"
            {...methods.register("driversLicenceCountry")}
          />
          <ErrorMessage error={errors.driversLicenceCountry?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.driversLicenceState}>
          <FormLabel htmlFor="driversLicenceState">
            Driver's Licence State
          </FormLabel>
          <Input
            id="driversLicenceState"
            {...methods.register("driversLicenceState")}
          />
          <ErrorMessage error={errors.driversLicenceState?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.customField1}>
          <FormLabel htmlFor="customField1">Custom Field 1</FormLabel>
          <Input id="customField1" {...methods.register("customField1")} />
          <ErrorMessage error={errors.customField1?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.customField2}>
          <FormLabel htmlFor="customField2">Custom Field 2</FormLabel>
          <Input id="customField2" {...methods.register("customField2")} />
          <ErrorMessage error={errors.customField2?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.customField3}>
          <FormLabel htmlFor="customField3">Custom Field 3</FormLabel>
          <Input id="customField3" {...methods.register("customField3")} />
          <ErrorMessage error={errors.customField3?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.controlProng}>
          <FormLabel htmlFor="controlProng">Control Prong</FormLabel>
          <Input
            id="controlProng"
            type="checkbox"
            {...methods.register("controlProng")}
          />
          <ErrorMessage error={errors.controlProng?.message} />
        </FormControl>
        {/* Document Upload Fields */}
        <FormControl
          mb={4}
          isInvalid={!!errors.ownerDetailsDocuments?.proofOfId?.fileName}
        >
          <FormLabel htmlFor="ownerDetailsDocuments.proofOfId.fileName">
            Proof of ID File Name
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="proofOfId"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="proofOfId"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={errors.ownerDetailsDocuments?.proofOfId?.fileName?.message}
            />
          </VStack>
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={!!errors.ownerDetailsDocuments?.proofOfAddress?.fileName}
        >
          <FormLabel htmlFor="ownerDetailsDocuments.proofOfAddress.fileName">
            Proof of Address File Name
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="proofOfAddress"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="proofOfAddress"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.ownerDetailsDocuments?.proofOfAddress?.fileName?.message
              }
            />
          </VStack>
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.ownerDetailsDocuments?.personalGuarantee?.fileName
          }
        >
          <FormLabel htmlFor="ownerDetailsDocuments.personalGuarantee.fileName">
            Personal Guarantee File Name
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="personalGuarantee"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="personalGuarantee"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.ownerDetailsDocuments?.personalGuarantee?.fileName
                  ?.message
              }
            />
          </VStack>
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.ownerDetailsDocuments?.driversLicenseFront?.fileName
          }
        >
          <FormLabel htmlFor="ownerDetailsDocuments.driversLicenseFront.fileName">
            Driver's License Front File Name
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="driversLicenseFront"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="driversLicenseFront"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.ownerDetailsDocuments?.driversLicenseFront?.fileName
                  ?.message
              }
            />
          </VStack>
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.ownerDetailsDocuments?.driversLicenseBack?.fileName
          }
        >
          <FormLabel htmlFor="ownerDetailsDocuments.driversLicenseBack.fileName">
            Driver's License Back File Name
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="driversLicenseBack"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="driversLicenseBack"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.ownerDetailsDocuments?.driversLicenseBack?.fileName
                  ?.message
              }
            />
          </VStack>
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Submit
        </Button>
      </Box>
    </FormProvider>
  );
};

export default OwnerDetailsForm;
