import { a } from "framer-motion/client";
import { z } from "zod";

export const businessSchema = z.object({
  businessName: z
    .string()
    .min(1, "The Name is required"),
  businessLegalName: z
    .string()
    .min(1, "The Legal Name is required"),
  businessRegistrationNumber: z
    .string()
    .min(1, "The Registration Number is required"),
  businessOwnershipType: z
    .string()
    .min(1, "The Ownership type is required"),
  businessTaxId: z
    .string()
    .min(1, "The Tax ID is required"),
  businessGiin: z
    .string()
    .min(1, "The GIIN is required"),
  businessIncorporationDate: z
    .string()
    .min(1, 'The Incorporation Date is required'),
  // businessBusinessAddress: z
  //   .string()
  //   .min(1, 'The business address is required'),
  businessBusinessAddress: z.object({
      address: z.string().min(5, { message: "Address is required" }),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
      country: z.string(),
      apartment: z.string(),
    }),

  businessCorporateAddress: z
    .string()
    .min(1, 'The corporate address is required'),
  businessCompanyWebsiteUrl: z
    .string()
    .min(1, 'The Company Website URL is required'),
  businessDbaName: z
    .string()
    .min(1, 'The DBA Name is required'),
  businessDbaWebsiteUrl: z
    .string()
    .min(1, 'The DBA Website URL is required'),
  businessDynamicDescriptor: z
    .string()
    .min(1, 'The Dynamic Descriptor is required'),
  businessDescription: z
    .string()
    .min(1, 'The Description is required'),
  businessCustomerServicePhone: z
    .string()
    .min(1, 'The Customer Service Phone is required'),
  businessCustomerServiceEmail: z
    .string()
    .min(1, 'The Customer Service Email is required'),
  businessFax: z
    .string()
    .min(1, 'The Fax is required'),
  businessAgreement: z
    .string()
    .min(1, 'The Agreement is required'),
  businessCustomField1: z
    .string(),
  businessCustomField2: z
    .string(),
  businessCustomField3: z
    .string(),
  businessPhoneNumber: z
    .string()
    .min(1, 'The Phone Number is required'),
  businessEmailAddressForNotices: z
    .string()
    .min(1, 'The Email Address for Notices is required'),
  businessNumberOfLocations: z
    .number()
    .min(1, 'The Number of Locations is required'),
  businessNumberOfOutlets: z
    .number()
    .min(1, 'The Number of Outlets is required'),
    businessBusinessDetailsDocuments: z
    .string()
    .min(1, 'The Email Address for Notices is required'),
});