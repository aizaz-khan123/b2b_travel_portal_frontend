import { z } from "zod";

export const supplierSchema = z.object({
    name: z.string({required_error: "Airport Name Required!"}),
    description: z.string().optional(),
    status: z.boolean(),
});

export type SupplierSchemaType = z.infer<typeof supplierSchema>;