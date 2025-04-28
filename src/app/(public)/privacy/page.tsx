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
      <div className="container mx-auto mt-16 px-4 py-16">
        <Card className="mx-auto max-w-4xl border-white/20 bg-white p-8 shadow-xl backdrop-blur-sm">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <h1 className="mb-8 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-3xl font-bold text-transparent">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <section className="rounded-lg bg-gray-100 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary">
                1. Introduction
              </h2>
              <p>
                At StoryToast, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our service.
              </p>
            </section>

            <section className="rounded-lg bg-gray-100 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary">
                2. Information We Collect
              </h2>
              <h3 className="mb-2 text-lg font-medium">Personal Information</h3>
              <ul className="mb-4 list-disc space-y-2 pl-6">
                <li>Email address</li>
                <li>Name (if provided)</li>
                <li>Billing information</li>
                <li>Usage data and preferences</li>
              </ul>

              <h3 className="mb-2 text-lg font-medium">
                Automatically Collected Information
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Usage patterns and statistics</li>
              </ul>
            </section>

            <section className="rounded-lg bg-gray-100 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc space-y-2 pl-6">
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

            <section className="rounded-lg bg-gray-100 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary">
                4. Data Storage and Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no
                method of transmission over the Internet or electronic storage
                is 100% secure.
              </p>
            </section>

            <section className="rounded-lg bg-gray-100 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary">
                5. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </section>

            <section className="rounded-lg bg-gray-100 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary">
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

            <section className="rounded-lg bg-gray-100 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary">
                7. Your Data Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to our processing of your data</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section className="rounded-lg bg-gray-100 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary">
                8. {"Children's Privacy"}
              </h2>
              <p>
                Our service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13.
              </p>
            </section>

            <section className="rounded-lg bg-gray-100 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-primary">
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

            <div className="mt-8 border-t border-white/10 pt-6">
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
