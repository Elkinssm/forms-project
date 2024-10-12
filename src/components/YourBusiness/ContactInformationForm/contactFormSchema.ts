import { z } from "zod";

export const contactFormSchema = z.object({
  contactInformationContact: z
    .string()
    .min(1, "The contact information must be at least 1 characters long"),
  contactInformationEmail: z
    .string()
    .min(
      6,
      "The Contact Information Primary Name must be at least 6 characters long"
    ),
  contactInformationPhone: z
    .string()
    .min(
      6,
      "The Contact Information Secondary Name must be at least 6 characters long"
    ),
  useInformationFrom: z
    .string()
    .min(1, "You must select a mailing option"),
});
