import { z } from "zod";

const controllingOfficerSchema = z.object({
  controllerOfficerFirstName: z
    .string()
    .min(2, "The First Name must be at least 2 chars")
    .optional(),
  controllerOfficerMiddleName: z
    .string()
    .min(2, "The Middle Name must be at least 2 chars")
    .optional(),
  controllerOfficerLastName: z
    .string()
    .min(2, "The Last Name must be at least 2 chars")
    .optional(),
  controllerOfficerTitle: z
    .string()
    .min(1, "The Title is required")
    .optional(),
  controllerOfficerOfficerIsOwner: z.string().default("yes"),
  controllerOfficerAddress: z
    .string()
    .min(10, "The address must be at least 10 characters long")
    .optional(),
  controllerOfficerCity: z
    .string()
    .min(3, "The city must be at least 3 characters long")
    .optional(),
  controllerOfficerZip: z
    .string()
    .min(5, "The zip must be at least 5 characters long")
    .optional(),
  controllerOfficerHomePhone: z
    .string()
    .min(10, "The home phone must be at least 10 characters long")
    .optional(),
  controllerOfficerLicenseNumber: z
    .string()
    .min(2, `The licence number must be at least 2 characters long`)
    .optional(),
  controllerOfficerLicenseNumberExpires: z
    .string()
    .min(10, "Expiration date must have at least 10 characters (YYYY-MM-DD)")
    .refine(
      (value) => {
        const date = new Date(value);
        const now = new Date();
        return date > now;
      },
      { message: "Expiration date must be in the future" }
    )
    .optional(),
  controllerOfficerDob: z.coerce
    .string()
    .min(10, "Date of birth must be at least 10 characters long")
    .refine((date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime()) && parsedDate < new Date();
    }, {
      message: "Date of birth must be a valid date in the past",
    })
    .optional(),
  controllerOfficerEmail: z.string().email("A valid email is required")
  .optional(),
}).refine(data => {
  if (data.controllerOfficerOfficerIsOwner === "no") {
    return (
      data.controllerOfficerFirstName &&
      data.controllerOfficerMiddleName &&
      data.controllerOfficerLastName &&
      data.controllerOfficerTitle &&
      data.controllerOfficerAddress &&
      data.controllerOfficerCity &&
      data.controllerOfficerZip &&
      data.controllerOfficerHomePhone &&
      data.controllerOfficerLicenseNumber &&
      data.controllerOfficerLicenseNumberExpires &&
      data.controllerOfficerDob &&
      data.controllerOfficerEmail
    );
  }
  return true;
}, {
  message: "All fields are required if Officer is not the owner",
  path: ["controllerOfficerOfficerIsOwner"],
});

export { controllingOfficerSchema };
