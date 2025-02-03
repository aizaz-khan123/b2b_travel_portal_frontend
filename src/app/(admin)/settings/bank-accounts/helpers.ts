import { z } from "zod";

export const bankAccountSchema = z.object({
    account_holder_name: z.string({required_error: "Account Holder Name Required!"}).trim(),
    bank_name: z.string({ required_error: "Bank Name Required!" }).trim().min(5, { message: "Bank Name Should be greater than 5 digit!" }).max(50),
    bank_address: z.string().max(200).optional(),
    contact_number: z.string({ required_error: "Contact Number Required!" }),
    account_number: z.string({ required_error: "Account Number Required!" }),
    iban: z.string({required_error: "IBAN is required!"}),
    bank_logo: z.instanceof(File).optional(),
});

export type BankAccountSchemaType = z.infer<typeof bankAccountSchema>;