import { z } from "zod";

const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,4}\/?$/;

export const corporateInformationFormSchema = z.object({
  corpLegalFedTaxId: z
    .string()
    .min(6, "The fed tax id must be at least 6 characters long"),
  corpLegalName: z.string().min(5, { message: "Name is required" }),
  corpLegalAddress: z.string().min(5, { message: "Address is required" }),
  corpLegalCity: z.string().min(1, { message: "City is required" }),

  corpLegalState: z.string().min(1, { message: "State is required" }),
  corpLegalZip: z
    .string()
    .min(5, { message: "ZIP code must be at least 5 characters long" }),

  corpLegalPhone: z
    .string()
    .min(10, "The phone number must be at least 10 characters long"),

  corpLegalEmail: z.string().email("A valid email is required"),
  yearsInBusiness: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Years in business must be at least 1 digit long")
  ),
  aditionalDetailsLocations: z.preprocess(
    (val) => Number(val),
    z.number().int().min(1, "Locations must be at least 1")
  ),
  aditionalDetailsWebsite: z.string().regex(urlRegex, "Invalid website URL"),
  aditionalDetailsMailing: z.preprocess(
    (val) => (val === null ? "" : val),
    z.string().min(1, "Please select an option")
  ),
});
