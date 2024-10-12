import { z } from "zod";

export const businesProfileSchema = z.object({
  businessProfileOwnershipType: z
    .string()
    .min(2, "The Ownership type must be at least 2 chars"),
  businessProfileBusinessType: z
    .string()
    .min(2, "The Business type must be at least 2 chars"),
  businessProfileMCC: z.string().min(2, "The MCC must be at least 2 chars"),
  businessProfileGoodsServices: z
    .string()
    .min(2, "The Goods Services must be at least 2 chars"),
  businessProfileBankName: z
    .string()
    .min(2, "The Bank Name must be at least 2 chars"),
  businessProfileBusinessCheckingAccount: z
    .string()
    .min(2, "The Business Checking Account must be at least 2 chars"),
  businessProfileBusinessCheckRouting: z
    .string()
    .min(2, "The Business Check Routing must be at least 2 chars"),
});
