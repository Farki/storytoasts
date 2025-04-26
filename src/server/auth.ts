import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { PUBLIC_ROUTES } from "@/routes";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  return {
    adapter: PrismaAdapter(prisma),
    providers: [
      Resend({
        apiKey: process.env.RESEND_API_KEY,
        from: process.env.EMAIL_FROM,
        // sendVerificationRequest({
        //   identifier: email,
        //   url,
        //   provider: { server, from },
        // }) {},
      }),
    ],
    pages: {
      signIn: PUBLIC_ROUTES.SignIn,
      verifyRequest: "/auth/auth-success",
      error: "/auth/auth-error",
    },
    callbacks: {
      async redirect({ baseUrl }) {
        return `${baseUrl}/dashboard`;
      },
    },
  };
});
