import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email({ message: "invalid email addresss" }),
  password: z
    .string()
    .min(8, { message: "Password mush be at least 8 characters long " }),
});

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
