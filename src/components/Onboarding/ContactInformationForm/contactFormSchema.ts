import { z } from "zod";

export const contactFormSchema = z.object({
  contactInformationContact: z
    .string()
    .min(1, "The contact name is required"),
  contactInformationEmail: z
    .string()
    .email("The Contact email is required"),
  contactInformationPhone: z
    .string()
    .min(
      10,
      "The Contact phone must be at least 10 characters long"
    ),
  useInformationFrom: z
    .string()
    .min(1, "You must select a mailing option"),
});
