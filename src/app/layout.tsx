import "./globals.css";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Outfit } from "next/font/google";
import { UIProvider } from "@/context/UIContext";
import Script from "next/script";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "StoryToast - Impactful Website Notifications",
  description:
    "Transform visitor engagement with attention-grabbing notifications that drive conversions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UIProvider>
        <body
          className={`${outfit.variable} font-sans bg-gray-50 text-gray-900`}
          suppressHydrationWarning
        >
          <Script
            strategy="beforeInteractive"
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
          />
          <SessionProvider>{children}</SessionProvider>
          <SpeedInsights />
        </body>
      </UIProvider>
    </html>
  );
}
