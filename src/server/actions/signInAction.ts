"use server";

import { signIn } from "@/server/auth";
import { signInSchema } from "@/validations/singInSchema";
import { verifyCaptchaToken } from "@/lib/captcha";
import arcjet, { validateEmail } from "@/lib/arcjet";
import { request } from "@arcjet/next";

export type FormState = {
  fields?: Record<string, string>;
  errors?: string[];
  success?: boolean;
  message?: string;
};

const aj = arcjet.withRule(
  validateEmail({
    mode: "LIVE",
    block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
  }),
);

export async function signInAction(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  try {
    const formData = Object.fromEntries(data);
    const parsed = signInSchema.safeParse(formData);
    if (!parsed.success) {
      const fields: Record<string, string> = {};
      for (const key of Object.keys(formData)) {
        fields[key] = formData[key].toString();
      }
      return {
        fields,
        errors: parsed.error.issues.map((issue) => issue.message),
        success: false,
      };
    }
    const token = parsed.data?.recaptchaToken;
    if (!token) {
      return {
        success: false,
        message: "Captcha token not found",
      };
    }

    // const req = await request();
    // const decision = await aj.protect(req, {
    //   email: parsed.data.email,
    // });
    //
    // if (decision.isDenied()) {
    //   return {
    //     success: false,
    //     message: "Denied email address",
    //   };
    // }

    const captchaData = await verifyCaptchaToken(token);

    if (!captchaData?.success || captchaData?.score < 0.5) {
      return {
        success: false,
        message: "Captcha verification failed",
        errors: !captchaData?.success
          ? captchaData?.["error-codes"]
          : undefined,
      };
    }

    return signIn("resend", {
      email: parsed.data.email,
      callbackUrl: "/dashboard",
    });
  } catch (error) {
    console.error(error);
    return {
      errors: ["Something went wrong"],
      success: false,
    };
  }
}
