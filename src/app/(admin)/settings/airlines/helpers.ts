import { z } from "zod";

export const airlineSchema = z.object({
    name: z.string({required_error: "Airline Name Required!"}).trim(),
    iata_code: z.string().max(10).optional(),
    status: z.boolean(),
    issuing_pcc: z.string().optional(),
    tour_code: z.string().optional(),
    reserving_pcc: z.string().optional(),
    country_id: z.number({required_error: "Country is required!"}),
    thumbnail: z.instanceof(File).optional(),
});

export type AirlineSchemaType = z.infer<typeof airlineSchema>;