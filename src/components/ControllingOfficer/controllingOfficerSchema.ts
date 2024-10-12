import { z } from "zod";

const twoMin = 2;
export const controllingOfficerSchema = z.object({
  controllerOfficerFirstName: z
    .string()
    .min(2, "The First Name must be at least 2 chars"),
  controllerOfficerMiddleName: z
    .string()
    .min(2, "The Middle Name must be at least 2 chars"),
  controllerOfficerLastName: z
    .string()
    .min(2, "The Last Name must be at least 2 chars"),
  controllerOfficerTitle: z
    .string()
    .min(2, "The Title must be at least 2 chars"),
  controllerOfficerIsOwner: z.number(),
  controllerOfficerAddress: z
    .string()
    .min(10, "The address must be at least 10 characters long"),
  controllerOfficerCity: z
    .string()
    .min(3, "The city must be at least 3 characters long"),
  controllerOfficerZip: z
    .string()
    .min(5, "The zip must be at least 5 characters long"),
  controllerOfficerHomePhone: z
    .string()
    .min(10, "The home phone must be at least 10 characters long"),
  controllerOfficerSSN: z
    .string()
    .min(twoMin, `The SSN must be at least ${twoMin} characters long`),
  controllerOfficerLicenseNumber: z
    .string()
    .min(
      twoMin,
      `The licence number must be at least ${twoMin} characters long`
    ),
  controllerOfficerLicenseNumberExpires: z.coerce
    .date()
    .refine((data) => data >= new Date(), {
      message: "Expiratin date must be in the future",
    }),
  controllerOfficerDob: z.coerce.date().refine((data) => data < new Date(), {
    message: "Date of birth must be in the past",
  }),
  controllerOfficerEmail: z.string().email("A valid email is required"),
});
