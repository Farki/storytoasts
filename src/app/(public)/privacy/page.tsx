import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-400 to-purple-600">
      <div className="container mx-auto px-4 py-16 mt-16">
        <Card className="max-w-4xl mx-auto p-8 bg-background/95 backdrop-blur-sm border-white/20 shadow-xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                1. Introduction
              </h2>
              <p>
                At StoryToast, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our service.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                2. Information We Collect
              </h2>
              <h3 className="text-lg font-medium mb-2 text-white">
                Personal Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Email address</li>
                <li>Name (if provided)</li>
                <li>Billing information</li>
                <li>Usage data and preferences</li>
              </ul>

              <h3 className="text-lg font-medium mb-2 text-white">
                Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Usage patterns and statistics</li>
              </ul>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information to improve our
                  service
                </li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                4. Data Storage and Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no
                method of transmission over the Internet or electronic storage
                is 100% secure.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                5. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                6. Third-Party Services
              </h2>
              <p>
                We may employ third-party companies and individuals to
                facilitate our service, provide service-related services, or
                assist us in analyzing how our service is used. These third
                parties have access to your personal information only to perform
                these tasks on our behalf.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                7. Your Data Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to our processing of your data</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                8. {"Children's Privacy"}
              </h2>
              <p>
                Our service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:privacy@storytoast.com"
                  className="text-primary hover:underline"
                >
                  privacy@storytoast.com
                </a>
                .
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
