"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
            Terms and Conditions
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                1. Introduction
              </h2>
              <p>
                Welcome to StoryToast. By accessing our website and using our
                services, you agree to these terms and conditions. Please read
                them carefully.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                2. Definitions
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  &quot;Service&quot; refers to the StoryToast platform and all
                  related services.
                </li>
                <li>
                  &quot;User&quot; refers to any individual or entity using our
                  Service.
                </li>
                <li>
                  &quot;Content&quot; refers to all materials created, uploaded,
                  or shared through our Service.
                </li>
              </ul>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                3. Use of Service
              </h2>
              <p className="mb-4">
                You agree to use the Service only for lawful purposes and in
                accordance with these Terms. You are prohibited from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using the Service for any illegal activity</li>
                <li>Attempting to interfere with or disrupt the Service</li>
                <li>Impersonating any person or entity</li>
                <li>Collecting user information without consent</li>
              </ul>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                4. Account Registration
              </h2>
              <p>
                To use certain features of the Service, you must register for an
                account. You agree to provide accurate information and maintain
                the security of your account credentials.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                5. Privacy
              </h2>
              <p>
                Your privacy is important to us. Our collection and use of
                personal information is governed by our Privacy Policy, which is
                incorporated into these Terms by reference.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                6. Fees and Payment
              </h2>
              <p className="mb-4">
                Some features of StoryToast may require payment ("Paid
                Services"). Pricing, billing, and refund policies will be
                clearly communicated before you subscribe. You authorize us to
                charge your provided payment method for applicable fees.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                7. Intellectual Property
              </h2>
              <p className="mb-4">
                All content, features, and functionality of the Service are
                owned by StoryToast and are protected by international
                copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                8. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your account and
                access to the Service at our sole discretion, without notice,
                for conduct that we believe violates these Terms or is harmful
                to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify users of any material changes via email or through the
                Service. Your continued use of the Service after such
                modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                10. Contact Information
              </h2>
              <p>
                For questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:legal@storytoast.com"
                  className="text-primary hover:underline"
                >
                  legal@storytoast.com
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
