import { BarChart3, LineChart, DollarSign } from "lucide-react";
import SignInForm from "@/app/(public)/auth/sign-in/sign-in-form";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignInPage() {
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
      />

      <div className="container relative grid min-h-screen flex-col items-center justify-center bg-background lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-gradient-to-br from-primary via-purple-600 to-primary p-10 text-white lg:flex">
          <div className="relative z-20 mt-auto">
            {/* Animated Dashboard Cards */}
            <div className="relative h-[500px] w-full max-w-[500px]">
              {/* Line Chart Card */}
              <div className="absolute left-16 top-0 w-full rotate-[-6deg] transform rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:rotate-[-4deg]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Income</h3>
                    <LineChart className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex h-32 items-end justify-between gap-1">
                    {[40, 70, 55, 90, 50, 75, 65].map((height, i) => (
                      <div
                        key={i}
                        className="w-full animate-pulse rounded-t bg-primary/20"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Stats Card */}
              <div className="absolute left-32 top-32 w-full rotate-[-6deg] transform rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:rotate-[-4deg]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">
                      Recent Transactions
                    </h3>
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1"
                      >
                        <div className="h-3 w-2/3 animate-pulse rounded bg-gray-100" />
                        <div className="h-3 w-1/4 animate-pulse rounded bg-primary/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bar Chart Card */}
              <div className="absolute left-48 top-64 w-full rotate-[-6deg] transform rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:rotate-[-4deg]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">
                      Product Performance
                    </h3>
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex h-24 items-end justify-between gap-2">
                    {[60, 80, 40, 90, 30, 70].map((height, i) => (
                      <div
                        key={i}
                        className="w-full animate-pulse rounded-t bg-primary"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="mt-12 space-y-2">
              <p className="text-lg">
                {
                  '"StoryToast has transformed how we engage with our visitors. Theresults have been incredible."'
                }
              </p>
              <footer className="text-sm">
                Sofia Davis, Marketing Director
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-white">
                Welcome
              </h1>
              <p className="text-sm text-muted-foreground">
                Sign in to your account to continue
              </p>
            </div>
            <SignInForm />
          </div>
        </div>
      </div>
    </>
  );
}
