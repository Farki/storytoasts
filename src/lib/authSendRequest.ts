import { EmailProviderSendVerificationRequestParams } from "@auth/core/providers/email";
import MagicLinkEmail from "@/components/emails/MagicLinkEmail";
import { Resend } from "resend";

export async function sendVerificationRequest(
  params: EmailProviderSendVerificationRequestParams,
) {
  const { identifier: to, provider, url } = params;

  const formattedNowDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date());

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { host } = new URL(url);
  const res = await resend.emails.send({
    from: provider.from || (process.env.MAGIC_LINK_EMAIL_FROM as string),
    to: to,
    subject: `Secure link to sign in to ${host} | ${formattedNowDate}`,
    react: MagicLinkEmail({ url, host }),
  });

  if (res.error)
    throw new Error("Magic Link Resend error: " + JSON.stringify(res.error));
}
