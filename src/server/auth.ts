import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";
import { sendVerificationRequest } from "@/lib/authSendRequest";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  return {
    adapter: PrismaAdapter(prisma),
    providers: [
      Resend({
        apiKey: process.env.RESEND_API_KEY,
        from: process.env.MAGIC_LINK_EMAIL_FROM,
        maxAge: 60 * 5, // 5 minutes
        sendVerificationRequest,
      }),
    ],
    pages: {
      signIn: PUBLIC_ROUTES.SignIn,
      verifyRequest: "/auth/auth-success",
      error: "/auth/auth-error",
    },
    callbacks: {
      async redirect({ url, baseUrl }) {
        // Redirect user on sign in
        if (url.startsWith(baseUrl)) return url; //Allow only internal redirects
        return `${baseUrl}${PRIVATE_ROUTES.Dashboard}`;
      },
    },
  };
});
