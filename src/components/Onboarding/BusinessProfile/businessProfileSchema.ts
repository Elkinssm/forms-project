import { z } from "zod";

export const businessProfileSchema = z.object({
  businessProfileOwnershipType: z
    .string()
    .min(1, "The Ownership type is required"),
  businessProfileBusinessType: z
    .string()
    .min(1, "The Business type type is required"),
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
  businessProfileBusinessCheckRoutingCheck: z
    .string()
    .min(1, 'Please confirm your routing number'),
  businessProfileBusinessCheckingAccountCheck: z
    .string()
    .min(1, 'Please confirm your routing number'),
  businessProfileDriverLicenseImage: z.string().min(1, 'Please upload a valid driver license image'),
  businessProfileVoidedCheckImage: z.string().min(1, 'Please upload a valid voided check image'),
}).superRefine((data, ctx) => {
  if (data.businessProfileBusinessCheckRouting !== data.businessProfileBusinessCheckRoutingCheck) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Routing numbers must match',
      path: ['businessProfileBusinessCheckRoutingCheck'],
    });
  }
  if (data.businessProfileBusinessCheckingAccount !== data.businessProfileBusinessCheckingAccountCheck) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Business Checking Account must match',
      path: ['businessProfileBusinessCheckingAccountCheck'],
    });
  }
});