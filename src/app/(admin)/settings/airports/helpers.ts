import { z } from "zod";

export const airportSchema = z.object({
    name: z.string({required_error: "Airport Name Required!"}),
    municipality: z.string({required_error: "Municipality Name Required!"}),
    iso_country: z.string({required_error: "ISO Country Name Required!"}),
    iata_code: z.string({required_error: "IATA Code Required!"}),
});

export type AirportSchemaType = z.infer<typeof airportSchema>;