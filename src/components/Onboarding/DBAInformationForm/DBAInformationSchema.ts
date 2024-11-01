import { z } from "zod";

export const DBAInformationScheme = z.object({
  merchDBAName: z
    .string()
    .min(6, "The DBA name must be at least 6 characters long"),
  merchName: z
    .string()
    .min(6, "The location name must be at least 6 characters long"),
  merchAddress: z
    .string()
    .min(10, "The address must be at least 10 characters long"),
  merchCity: z.string().min(3, "The city must be at least 3 characters long"),
  merchState: z.string().min(2, "The state must be at least 2 characters long"),
  merchZip: z.string().min(5, "The zip must be at least 5 characters long"),
  merchPhone: z
    .string()
    .min(10, "The phone number must be at least 10 characters long"),
  yearsInBusiness: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Years in business must be at least 1 digit long")
  ),
  merchEmail: z.string().email("A valid email is required"),
});
