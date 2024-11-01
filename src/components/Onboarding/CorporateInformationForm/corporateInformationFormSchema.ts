import { z } from "zod";

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
  controllerOfficerIsOwner: z.enum(["yes", "no"]).default("no"),
});
