import * as z from "zod";

export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  recaptchaToken: z.string().nullish(),
});
