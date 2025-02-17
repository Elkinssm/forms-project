import * as yup from "yup";

export const businessSchemaYup = yup.object().shape({
  businessName: yup.string().required("The Name is required"),
  businessLegalName: yup.string().required("The Legal Name is required"),
  businessRegistrationNumber: yup
    .string()
    .required("The Registration Number is required"),
  businessOwnershipType: yup
    .string()
    .required("The Ownership type is required"),
  businessTaxId: yup.string().required("The Tax ID is required"),
  businessGiin: yup.string().required("The GIIN is required"),
  businessIncorporationDate: yup
    .string()
    .required("The Incorporation Date is required"),
  businessBusinessAddress: yup
    .object()
    .shape({
      street: yup.string().min(5, "Address is required"),
      country: yup.string(),
      stateCode: yup.string(),
      apartment: yup.string(),
      city: yup.string(),
      zip: yup.string(),
    })
    .default({
      street: "",
      country: "",
      stateCode: "",
      apartment: "",
      city: "",
      zip: "",
    }),
  businessCorporateAddress: yup
    .object()
    .shape({
      street: yup.string().min(5, "Address is required"),
      country: yup.string(),
      stateCode: yup.string(),
      apartment: yup.string(),
      city: yup.string(),
      zip: yup.string(),
    })
    .default({
      street: "",
      country: "",
      stateCode: "",
      apartment: "",
      city: "",
      zip: "",
    }),
  businessCompanyWebsiteUrl: yup
    .string()
    .required("The Company Website URL is required"),
  businessDbaName: yup.string().required("The DBA Name is required"),
  businessDbaWebsiteUrl: yup
    .string()
    .required("The DBA Website URL is required"),
  businessDynamicDescriptor: yup
    .string()
    .required("The Dynamic Descriptor is required"),
  businessDescription: yup.string().required("The Description is required"),
  businessCustomerServicePhone: yup
    .string()
    .required("The Customer Service Phone is required"),
  businessCustomerServiceEmail: yup
    .string()
    .email("Must be a valid email")
    .required("The Customer Service Email is required"),
  businessFax: yup.string().required("The Fax is required"),
  businessAgreement: yup.string().required("The Agreement is required"),
  businessCustomField1: yup.string().notRequired(), // Hacer opcional
  businessCustomField2: yup.string().notRequired(), // Hacer opcional
  businessCustomField3: yup.string().notRequired(), // Hacer opcional
  businessPhoneNumber: yup
    .string()
    .required("The Business Phone Number is required"),
  businessEmailAddressForNotices: yup
    .string()
    .email("Must be a valid email")
    .required("The Email Address for Notices is required"),
  businessNumberOfLocations: yup
    .number()
    .required("The Number of Locations is required"),
  businessNumberOfOutlets: yup
    .number()
    .required("The Number of Outlets is required"),
  businessDetailsDocumentsRegistrationCertificate: yup.mixed().notRequired(), // Hacer opcional
  businessDetailsDocumentsProofOfAddress: yup.mixed().notRequired(), // Hacer opcional
  businessDetailsDocumentsArticleOfIncorporation: yup.mixed().notRequired(), // Hacer opcional
  businessDetailsDocumentsCustomDocument1: yup.mixed().notRequired(), // Hacer opcional
  businessDetailsDocumentsCustomDocument2: yup.mixed().notRequired(), // Hacer opcional
  businessDetailsDocumentsCustomDocument3: yup.mixed().notRequired(), // Hacer opcional
});
