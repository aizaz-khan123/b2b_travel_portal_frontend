import { z } from "zod";

export const newsSchema = z.object({
    title: z.string({ required_error: "News Title Required!" }),
    description: z.string({ required_error: "News Description Required!" }),
    news_url: z.string({ required_error: "News Redirect URL Required!" }).url("Invalid URL!"),
    is_feature: z.boolean(),
    image: z.instanceof(File).optional(),
});

export type NewsSchemaType = z.infer<typeof newsSchema>;
