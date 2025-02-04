import { z } from "zod";

export const airlineMarginSchema = z.object({
    sales_channel: z.string({required_error: "Sales Channel Must Required!"}).min(1, "Sales Channel is required!"),
    airline_id: z.number({required_error: "Airline Must Required!"}).min(1, "Airline ID is required!"),
    region: z.array(z.string()).min(1, "At least one region must be selected!"),
    margin: z.string({required_error: "Margin must Required!"}).min(0, "Margin must be at least 0!"),
    margin_type: z.enum(["amount", "percentage"], {
        errorMap: () => ({ message: "Margin Type must be 'amount' or 'percentage'!" }),
    }),
    sale_start_continue: z.coerce.date().optional(),
    sale_end_continue: z.coerce.date().optional(),
    travel_start_continue: z.coerce.date().optional(),
    travel_end_continue: z.coerce.date().optional(),
    rbds: z.string().optional(),
    is_apply_on_gross: z.boolean(),
    status: z.boolean(),
    remarks: z.string().optional(),
}).superRefine(({ sale_start_continue, sale_end_continue, travel_start_continue, travel_end_continue }, ctx) => {
    if (sale_start_continue && sale_end_continue && sale_end_continue < sale_start_continue) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Sale End Date must be after or equal to Sale Start Date!",
            path: ["sale_end_continue"],
        });
    }
    if (travel_start_continue && travel_end_continue && travel_end_continue < travel_start_continue) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Travel End Date must be after or equal to Travel Start Date!",
            path: ["travel_end_continue"],
        });
    }
});

export type airlineMarginSchemaType = z.infer<typeof airlineMarginSchema>;
