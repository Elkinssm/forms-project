import { z } from "zod";

export const bankingSchema = z.object({
    bankingBankAccountAccountNumber: z.string().min(1, "Account number is required"),
    bankingBankAccountAccountType: z.string().min(1, "Account type is required"),
    bankingBankAccountAccountHolderName: z.string().min(1, "Account holder name is required"),
    bankingBankAccountEntityType: z.string().min(1, "Entity type is required"),
    bankingBankAccountRoutingNumber: z.string().min(1, "Routing number is required"),
    bankingBankAccountBankName: z.string().min(1, "Bank name is required"),
    bankingPlaidAccessToken: z.string().min(1, "Plaid access token is required"),
    bankingBillingAddress: z.object({
        street: z.string().min(5, { message: "Address is required" }),
        country: z.string(),
        stateCode: z.string(),
        apartment: z.string(),
        city: z.string(),
        zip: z.string(),
    }),
    bankingDocumentsVoidCheck: z.string().optional(),
    bankingDocumentsCustomDocument1: z.string().optional(),
    bankingDocumentsCustomDocument2: z.string().optional(),
    bankingDocumentsCustomDocument3: z.string().optional(),
});