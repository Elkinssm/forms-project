import { z } from "zod";

const contactDetailsSchema = z.object({
    contactDetailsId: z.string().min(1, "Contact ID is required"),
    contactDetailsContactType: z.string().min(1, "Contact type is required"),
    contactDetailsFirstName: z.string().min(1, "First name is required"),
    contactDetailsLastName: z.string().min(1, "Last name is required"),
    contactDetailsLegalName: z.string().min(1, "Legal name is required"),
    contactDetailsEmail: z.string().email("Invalid email address"),
    contactDetailsMobilePhone: z.string().min(1, "Mobile phone is required"),
    contactDetailsHomePhone: z.string().optional(),
    contactDetailsAddress: z.object({
        street: z.string().min(5, { message: "Address is required" }),
        country: z.string(),
        stateCode: z.string(),
        apartment: z.string(),
        city: z.string(),
        zip: z.string(),
    }),
    contactDetailsCustomField1: z.string().optional(),
    contactDetailsCustomField2: z.string().optional(),
    contactDetailsCustomField3: z.string().optional(),
});

const contactSchema = z.object({
    contacts: z.array(contactDetailsSchema),
});

export default contactSchema;