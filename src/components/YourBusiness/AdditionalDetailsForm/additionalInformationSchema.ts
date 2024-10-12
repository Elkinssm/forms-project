import { z } from "zod";

export const additionalInformationSchema = z.object({
  aditionalDetailsLocations: z.preprocess(
    (val) => Number(val),
    z.number().int().min(1, "Locations must be at least 1")
  ),
  aditionalDetailsMailing: z.preprocess(
    (val) => (val === null ? "" : val),
    z.string().min(1, "Please select an option")
  ),
  aditionalDetailsWebsite: z.string().url("Invalid website URL"),
});
