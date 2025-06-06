import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "StoryToasts - Impactful Website Notifications",
    template: "%s | StoryToasts",
  },
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
