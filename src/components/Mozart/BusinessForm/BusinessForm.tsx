import { Box, Button, VisuallyHidden, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { businessSchema } from "./businessSchema";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import { formDataBusiness } from "./businessData";
import AddressInput from "../../FormComponents/AddressInput";
import AllDataMozartForm from "../../../utils/AllDataMozartForm";

type BusinessDataForm = z.infer<typeof businessSchema>;

interface BusinessFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessDataForm) => void;
  formData?: BusinessDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof businessSchema;
  formDataAll?: AllDataMozartForm;
}

const BusinessForm: React.FC<BusinessFormProps> = ({
  onNext,
  onDataChange,
  formData = formDataBusiness,
  validationSchema = businessSchema,
  formRef,
}) => {
  const methods = useForm<BusinessDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });

  const {
    handleSubmit,
    getValues,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<BusinessDataForm> = (data) => {
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  const handleDebug = () => {
    const values = getValues();
    console.log(values);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        console.log(id, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <FormControl mb={4} isInvalid={!!errors.businessName}>
          <FormLabel htmlFor="businessName">Business Name</FormLabel>
          <Input
            id="businessName"
            type="text"
            placeholder="Enter the business name"
            {...methods.register("businessName")}
          />
          <ErrorMessage error={errors.businessName?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessLegalName}>
          <FormLabel htmlFor="businessLegalName">Business Legal Name</FormLabel>
          <Input
            id="businessLegalName"
            type="text"
            placeholder="Enter the business legal name"
            {...methods.register("businessLegalName")}
          />
          <ErrorMessage error={errors.businessLegalName?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessRegistrationNumber}>
          <FormLabel htmlFor="businessRegistrationNumber">
            Business registration number
          </FormLabel>
          <Input
            id="businessRegistrationNumber"
            type="text"
            placeholder="Enter the business registration number"
            {...methods.register("businessRegistrationNumber")}
          />
          <ErrorMessage error={errors.businessRegistrationNumber?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessOwnershipType}>
          <FormLabel htmlFor="businessOwnershipType">Ownership type</FormLabel>
          <Input
            id="businessOwnershipType"
            type="text"
            placeholder="Enter the ownership type"
            {...methods.register("businessOwnershipType")}
          />
          <ErrorMessage error={errors.businessRegistrationNumber?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessTaxId}>
          <FormLabel htmlFor="businessTaxId">Tax ID</FormLabel>
          <Input
            id="businessTaxId"
            type="text"
            placeholder="Enter the business tax ID"
            {...methods.register("businessTaxId")}
          />
          <ErrorMessage error={errors.businessRegistrationNumber?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessTaxId}>
          <FormLabel htmlFor="businessGiin">GIIN</FormLabel>
          <Input
            id="businessGiin"
            type="text"
            placeholder="Enter the business GIIN"
            {...methods.register("businessGiin")}
          />
          <ErrorMessage error={errors.businessGiin?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessIncorporationDate}>
          <FormLabel htmlFor="businessIncorporationDate">
            Incorporation Date
          </FormLabel>
          <Input
            id="businessIncorporationDate"
            type="date"
            placeholder="Enter the incorporation date"
            {...methods.register("businessIncorporationDate")}
          />
          <ErrorMessage error={errors.businessIncorporationDate?.message} />
        </FormControl>
        <AddressInput
          name="businessBusinessAddress"
          label="Business Adrress"
          placeholder="Enter your business address"
          error={errors.businessBusinessAddress?.street}
        />
        <AddressInput
          name="businessCorporateAddress"
          label="Business Adrress"
          placeholder="Enter your corporate address"
          error={errors.businessCorporateAddress?.street}
        />

        {/* Boton para poder ver los campos en el clg comentar o descomentar */}
        <Button onClick={handleDebug} colorScheme="blue" mb={4}>
          Debug
        </Button>
        <FormControl mb={4} isInvalid={!!errors.businessCompanyWebsiteUrl}>
          <FormLabel htmlFor="businessCompanyWebsiteUrl">
            Company Website URL
          </FormLabel>
          <Input
            id="businessCompanyWebsiteUrl"
            type="text"
            placeholder="Enter the company website URL"
            {...methods.register("businessCompanyWebsiteUrl")}
          />
          <ErrorMessage error={errors.businessCompanyWebsiteUrl?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessCompanyWebsiteUrl}>
          <FormLabel htmlFor="businessDbaName">DBA Name</FormLabel>
          <Input
            id="businessDbaName"
            type="text"
            placeholder="Enter the DBA name"
            {...methods.register("businessDbaName")}
          />
          <ErrorMessage error={errors.businessDbaName?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessDbaWebsiteUrl}>
          <FormLabel htmlFor="businessDbaWebsiteUrl">DBA website URL</FormLabel>
          <Input
            id="businessDbaWebsiteUrl"
            type="text"
            placeholder="Enter the DBA website URL"
            {...methods.register("businessDbaWebsiteUrl")}
          />
          <ErrorMessage error={errors.businessDbaWebsiteUrl?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessDynamicDescriptor}>
          <FormLabel htmlFor="businessDynamicDescriptor">
            Dynamic descriptor
          </FormLabel>
          <Input
            id="businessDynamicDescriptor"
            type="text"
            placeholder="Enter the business dynamic descriptor"
            {...methods.register("businessDynamicDescriptor")}
          />
          <ErrorMessage error={errors.businessDynamicDescriptor?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessDescription}>
          <FormLabel htmlFor="businessDescription">
            Business Description
          </FormLabel>
          <Input
            id="businessDescription"
            type="text"
            placeholder="Enter the business description"
            {...methods.register("businessDescription")}
          />
          <ErrorMessage error={errors.businessDescription?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessCustomerServicePhone}>
          <FormLabel htmlFor="businessCustomerServicePhone">
            Customer service phone
          </FormLabel>
          <Input
            id="businessCustomerServicePhone"
            type="text"
            placeholder="Enter the business customer service phone"
            {...methods.register("businessCustomerServicePhone")}
          />
          <ErrorMessage error={errors.businessCustomerServicePhone?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessCustomerServiceEmail}>
          <FormLabel htmlFor="businessCustomerServiceEmail">
            Customer service email
          </FormLabel>
          <Input
            id="businessCustomerServiceEmail"
            type="text"
            placeholder="Enter the business customer service email"
            {...methods.register("businessCustomerServiceEmail")}
          />
          <ErrorMessage error={errors.businessCustomerServiceEmail?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessFax}>
          <FormLabel htmlFor="businessFax">Fax</FormLabel>
          <Input
            id="businessFax"
            type="text"
            placeholder="Enter the business fax"
            {...methods.register("businessFax")}
          />
          <ErrorMessage error={errors.businessFax?.message} />
        </FormControl>
        {/*TODO: add social media
         "socialMediaAccounts": [
        {
          "socialNetwork": "Facebook",
          "accountName": "string"
        }
      ], */}
        <FormControl mb={4} isInvalid={!!errors.businessAgreement}>
          <FormLabel htmlFor="businessAgreement">Aggremment</FormLabel>
          <Input
            id="businessAgreement"
            type="text"
            placeholder="Enter the business agreement"
            {...methods.register("businessAgreement")}
          />
          <ErrorMessage error={errors.businessAgreement?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessCustomField1}>
          <FormLabel htmlFor="businessCustomField1">Custom field 1</FormLabel>
          <Input
            id="businessCustomField1"
            type="text"
            placeholder="Enter the custom field 1"
            {...methods.register("businessCustomField1")}
          />
          <ErrorMessage error={errors.businessCustomField1?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessCustomField2}>
          <FormLabel htmlFor="businessCustomField2">Custom field 2</FormLabel>
          <Input
            id="businessCustomField2"
            type="text"
            placeholder="Enter the custom field 2"
            {...methods.register("businessCustomField2")}
          />
          <ErrorMessage error={errors.businessCustomField2?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessCustomField3}>
          <FormLabel htmlFor="businessCustomField3">Custom field 3</FormLabel>
          <Input
            id="businessCustomField3"
            type="text"
            placeholder="Enter the custom field 3"
            {...methods.register("businessCustomField3")}
          />
          <ErrorMessage error={errors.businessCustomField3?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessPhoneNumber}>
          <FormLabel htmlFor="businessPhoneNumber">
            Business Phone Number
          </FormLabel>
          <Input
            id="businessPhoneNumber"
            type="text"
            placeholder="Enter the business phone number"
            {...methods.register("businessPhoneNumber")}
          />
          <ErrorMessage error={errors.businessPhoneNumber?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessEmailAddressForNotices}>
          <FormLabel htmlFor="businessEmailAddressForNotices">
            Email address for notices
          </FormLabel>
          <Input
            id="businessEmailAddressForNotices"
            type="text"
            placeholder="Enter the email address for notices"
            {...methods.register("businessEmailAddressForNotices")}
          />
          <ErrorMessage
            error={errors.businessEmailAddressForNotices?.message}
          />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessNumberOfLocations}>
          <FormLabel htmlFor="businessNumberOfLocations">
            Number of locations
          </FormLabel>
          <Input
            id="businessNumberOfLocations"
            type="text"
            placeholder="Enter the number of locations"
            {...methods.register("businessNumberOfLocations")}
          />
          <ErrorMessage error={errors.businessNumberOfLocations?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.businessNumberOfOutlets}>
          <FormLabel htmlFor="businessNumberOfOutlets">
            Number of outlets
          </FormLabel>
          <Input
            id="businessNumberOfOutlets"
            type="text"
            placeholder="Enter the number of outlets"
            {...methods.register("businessNumberOfOutlets")}
          />
          <ErrorMessage error={errors.businessNumberOfOutlets?.message} />
        </FormControl>
        {/* upload documents */}
        <FormControl
          isInvalid={!!errors.businessDetailsDocumentsRegistrationCertificate}
          mt={4}
        >
          <FormLabel htmlFor="businessDetailsDocumentsRegistrationCertificate">
            Registration certificate Image
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="businessDetailsDocumentsRegistrationCertificate"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="businessDetailsDocumentsRegistrationCertificate"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.businessDetailsDocumentsRegistrationCertificate?.message
              }
            />
          </VStack>
        </FormControl>
        <FormControl
          isInvalid={!!errors.businessDetailsDocumentsProofOfAddress}
          mt={4}
        >
          <FormLabel htmlFor="businessDetailsDocumentsProofOfAddress">
            Proof of address Image
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="businessDetailsDocumentsProofOfAddress"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="businessDetailsDocumentsProofOfAddress"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={errors.businessDetailsDocumentsProofOfAddress?.message}
            />
          </VStack>
        </FormControl>
        <FormControl
          isInvalid={!!errors.businessDetailsDocumentsArticleOfIncorporation}
          mt={4}
        >
          <FormLabel htmlFor="businessDetailsDocumentsArticleOfIncorporation">
            Article of incorporation Image
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="businessDetailsDocumentsArticleOfIncorporation"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="businessDetailsDocumentsArticleOfIncorporation"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.businessDetailsDocumentsArticleOfIncorporation?.message
              }
            />
          </VStack>
        </FormControl>
        <FormControl
          isInvalid={!!errors.businessDetailsDocumentsCustomDocument1}
          mt={4}
        >
          <FormLabel htmlFor="businessDetailsDocumentsCustomDocument1">
            Custom Image document 1
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="businessDetailsDocumentsCustomDocument1"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="businessDetailsDocumentsCustomDocument1"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={errors.businessDetailsDocumentsCustomDocument1?.message}
            />
          </VStack>
        </FormControl>
        <FormControl
          isInvalid={!!errors.businessDetailsDocumentsCustomDocument2}
          mt={4}
        >
          <FormLabel htmlFor="businessDetailsDocumentsCustomDocument2">
            Custom Image document 2
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="businessDetailsDocumentsCustomDocument2"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="businessDetailsDocumentsCustomDocument2"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={errors.businessDetailsDocumentsCustomDocument2?.message}
            />
          </VStack>
        </FormControl>
        <FormControl
          isInvalid={!!errors.businessDetailsDocumentsCustomDocument3}
          mt={4}
        >
          <FormLabel htmlFor="businessDetailsDocumentsCustomDocument3">
            Custom Image document 3
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="businessDetailsDocumentsCustomDocument3"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="businessDetailsDocumentsCustomDocument3"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={errors.businessDetailsDocumentsCustomDocument3?.message}
            />
          </VStack>
        </FormControl>
      </Box>
    </FormProvider>
  );
};

export default BusinessForm;
