import { z } from "zod";

export const ownerInformationScheme = z.object({
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
      // ownerBirthday: z.coerce.date().refine((data) => data < new Date(), {
      //   message: "Birthday must be in the past",
      // }),
      ownerBirthday: z.coerce
        .string()
        .min(10, "Date of birth must be at least 10 characters long")
        .refine(
          (date) => {
            const parsedDate = new Date(date);
            return !isNaN(parsedDate.getTime()) && parsedDate < new Date();
          },
          {
            message: "Date of birth must be a valid date in the past",
          }
        ),
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
      controllerOfficerIsOwner: z.enum(["yes", "no"]).default("no"),
    })
  ),
});
