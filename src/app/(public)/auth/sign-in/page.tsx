import { BarChart3, LineChart, DollarSign } from "lucide-react";
import SignInForm from "@/app/(public)/auth/sign-in/sign-in-form";
import Script from "next/script";

export default async function SignInPage() {
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
      />

      <div className="container bg-background relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-gradient-to-br from-primary via-purple-600 to-primary p-10 text-white lg:flex">
          <div className="relative z-20 mt-auto">
            {/* Animated Dashboard Cards */}
            <div className="relative w-full max-w-[500px] h-[500px]">
              {/* Line Chart Card */}
              <div className="absolute top-0 left-16 w-full p-6 bg-white rounded-2xl shadow-xl transform rotate-[-6deg] hover:rotate-[-4deg] transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-800 font-semibold">Income</h3>
                    <LineChart className="text-primary h-5 w-5" />
                  </div>
                  <div className="h-32 flex items-end justify-between gap-1">
                    {[40, 70, 55, 90, 50, 75, 65].map((height, i) => (
                      <div
                        key={i}
                        className="w-full bg-primary/20 rounded-t animate-pulse"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Stats Card */}
              <div className="absolute top-32 left-32 w-full p-6 bg-white rounded-2xl shadow-xl transform rotate-[-6deg] hover:rotate-[-4deg] transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-800 font-semibold">
                      Recent Transactions
                    </h3>
                    <DollarSign className="text-primary h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1"
                      >
                        <div className="w-2/3 h-3 bg-gray-100 rounded animate-pulse" />
                        <div className="w-1/4 h-3 bg-primary/20 rounded animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bar Chart Card */}
              <div className="absolute top-64 left-48 w-full p-6 bg-white rounded-2xl shadow-xl transform rotate-[-6deg] hover:rotate-[-4deg] transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-800 font-semibold">
                      Product Performance
                    </h3>
                    <BarChart3 className="text-primary h-5 w-5" />
                  </div>
                  <div className="h-24 flex items-end justify-between gap-2">
                    {[60, 80, 40, 90, 30, 70].map((height, i) => (
                      <div
                        key={i}
                        className="w-full bg-primary rounded-t animate-pulse"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="space-y-2 mt-12">
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
