import { z } from "zod";

export const countrySchema = z.object({
    name: z.string({required_error: "Country Name Required!"}),
    nice_name: z.string({required_error: "Nice Name Required!"}),
    iso: z.string({required_error: "ISO Required!"}),
    iso3: z.string({required_error: "ISO3 Required!"}),
});

export type CountrySchemaType = z.infer<typeof countrySchema>;