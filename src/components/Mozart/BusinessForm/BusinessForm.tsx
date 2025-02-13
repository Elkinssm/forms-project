import { Box } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { businessSchema } from "./businessSchema";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import { formDataBusiness } from "./businessData";

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
}

const BusinessForm: React.FC<BusinessFormProps> = ({
  onNext,
  onDataChange,
  formData = formDataBusiness,
  validationSchema = businessSchema,
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });
  const onSubmit: SubmitHandler<BusinessDataForm> = (data) => {
    // console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>

      <FormControl mb={4} isInvalid={!!errors.businessName}>
        <FormLabel htmlFor="businessName">
          Business Name
        </FormLabel>
        <Input
          id="businessName"
          type="text"
          placeholder="Enter the business name"
          {...register("businessName")}
        />
        <ErrorMessage error={errors.businessName?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessLegalName}>
        <FormLabel htmlFor="businessLegalName">
          Business Legal Name
        </FormLabel>
        <Input
          id="businessLegalName"
          type="text"
          placeholder="Enter the business legal name"
          {...register("businessLegalName")}
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
          {...register("businessRegistrationNumber")}
        />
        <ErrorMessage error={errors.businessRegistrationNumber?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessOwnershipType}>
        <FormLabel htmlFor="businessOwnershipType">
          Ownership type
        </FormLabel>
        <Input
          id="businessOwnershipType"
          type="text"
          placeholder="Enter the ownership type"
          {...register("businessOwnershipType")}
        />
        <ErrorMessage error={errors.businessRegistrationNumber?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessTaxId}>
        <FormLabel htmlFor="businessTaxId">
          Tax ID
        </FormLabel>
        <Input
          id="businessTaxId"
          type="text"
          placeholder="Enter the business tax ID"
          {...register("businessTaxId")}
        />
        <ErrorMessage error={errors.businessRegistrationNumber?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessTaxId}>
        <FormLabel htmlFor="businessGiin">
          GIIN
        </FormLabel>
        <Input
          id="businessGiin"
          type="text"
          placeholder="Enter the business GIIN"
          {...register("businessGiin")}
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
          {...register("businessIncorporationDate")}
        />
        <ErrorMessage error={errors.businessIncorporationDate?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessBusinessAddress}>
        <FormLabel htmlFor="businessBusinessAddress">
          Business Adrress
        </FormLabel>
        <Input
          id="businessBusinessAddress"
          type="text"
          placeholder="Enter the business address"
          {...register("businessBusinessAddress")}
        />
        <ErrorMessage error={errors.businessBusinessAddress?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessCorporateAddress}>
        <FormLabel htmlFor="businessCorporateAddress">
          Corporate Adrress
        </FormLabel>
        <Input
          id="businessCorporateAddress"
          type="text"
          placeholder="Enter the corporate address"
          {...register("businessCorporateAddress")}
        />
        <ErrorMessage error={errors.businessCorporateAddress?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessCompanyWebsiteUrl}>
        <FormLabel htmlFor="businessCompanyWebsiteUrl">
          Company Website URL
        </FormLabel>
        <Input
          id="businessCompanyWebsiteUrl"
          type="text"
          placeholder="Enter the company website URL"
          {...register("businessCompanyWebsiteUrl")}
        />
        <ErrorMessage error={errors.businessCompanyWebsiteUrl?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessCompanyWebsiteUrl}>
        <FormLabel htmlFor="businessDbaName">
          DBA Name
        </FormLabel>
        <Input
          id="businessDbaName"
          type="text"
          placeholder="Enter the DBA name"
          {...register("businessDbaName")}
        />
        <ErrorMessage error={errors.businessDbaName?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessDbaWebsiteUrl}>
        <FormLabel htmlFor="businessDbaWebsiteUrl">
          DBA website URL
        </FormLabel>
        <Input
          id="businessDbaWebsiteUrl"
          type="text"
          placeholder="Enter the DBA website URL"
          {...register("businessDbaWebsiteUrl")}
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
          {...register("businessDynamicDescriptor")}
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
          {...register("businessDescription")}
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
          {...register("businessCustomerServicePhone")}
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
          {...register("businessCustomerServiceEmail")}
        />
        <ErrorMessage error={errors.businessCustomerServiceEmail?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessFax}>
        <FormLabel htmlFor="businessFax">
          Fax
        </FormLabel>
        <Input
          id="businessFax"
          type="text"
          placeholder="Enter the business fax"
          {...register("businessFax")}
        />
        <ErrorMessage error={errors.businessFax?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessAgreement}>
        <FormLabel htmlFor="businessAgreement">
          Aggremment
        </FormLabel>
        <Input
          id="businessAgreement"
          type="text"
          placeholder="Enter the business agreement"
          {...register("businessAgreement")}
        />
        <ErrorMessage error={errors.businessAgreement?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessCustomField1}>
        <FormLabel htmlFor="businessCustomField1">
          Custom field 1
        </FormLabel>
        <Input
          id="businessCustomField1"
          type="text"
          placeholder="Enter the custom field 1"
          {...register("businessCustomField1")}
        />
        <ErrorMessage error={errors.businessCustomField1?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessCustomField2}>
        <FormLabel htmlFor="businessCustomField2">
          Custom field 2
        </FormLabel>
        <Input
          id="businessCustomField2"
          type="text"
          placeholder="Enter the custom field 2"
          {...register("businessCustomField2")}
        />
        <ErrorMessage error={errors.businessCustomField2?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessCustomField3}>
        <FormLabel htmlFor="businessCustomField3">
          Custom field 3
        </FormLabel>
        <Input
          id="businessCustomField3"
          type="text"
          placeholder="Enter the custom field 3"
          {...register("businessCustomField3")}
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
          {...register("businessPhoneNumber")}
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
          {...register("businessEmailAddressForNotices")}
        />
        <ErrorMessage error={errors.businessEmailAddressForNotices?.message} />
      </FormControl>

      <FormControl mb={4} isInvalid={!!errors.businessNumberOfLocations}>
        <FormLabel htmlFor="businessNumberOfLocations">
          Number of locations
        </FormLabel>
        <Input
          id="businessNumberOfLocations"
          type="text"
          placeholder="Enter the number of locations"
          {...register("businessNumberOfLocations")}
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
          {...register("businessNumberOfOutlets")}
        />
        <ErrorMessage error={errors.businessNumberOfOutlets?.message} />
      </FormControl>


    </Box>
  );
};

export default BusinessForm;
