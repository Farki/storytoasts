import "./globals.css";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Outfit } from "next/font/google";
import { UIProvider } from "@/context/UIContext";
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
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "StoryToast - Impactful Website Notifications",
  description:
    "Transform visitor engagement with attention-grabbing notifications that drive conversions.",
  twitter: { card: "summary_large_image" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://storytoasts.com/",
    siteName: "StoryToasts",
    images: "/og-image.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UIProvider>
        <body
          className={`${outfit.variable} font-sans bg-gray-50 text-gray-900`}
          suppressHydrationWarning
        >
          <SessionProvider>{children}</SessionProvider>
          <SpeedInsights />
        </body>
      </UIProvider>
    </html>
  );
}
