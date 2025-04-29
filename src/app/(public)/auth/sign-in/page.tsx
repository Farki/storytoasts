import Script from "next/script";
import { Metadata } from "next";
import SignInForm from "@/components/forms/SignInForm";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignInPage() {
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
      />

      <div className="container relative grid min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-gradient-to-br from-purple-600 via-blue-400 to-purple-600 p-10 text-white lg:flex">
          <div className="relative z-20 mt-auto">
            {/* Animated Toast Notifications */}
            <div className="relative mx-auto h-[500px] w-full max-w-[500px]">
              {/* Toast 1 */}
              <div className="animate-float-1 absolute left-0 top-0 w-full rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20" />
                  <div className="space-y-1">
                    <div className="h-2 w-24 rounded bg-primary/20" />
                    <div className="h-2 w-32 rounded bg-primary/10" />
                  </div>
                </div>
              </div>

              {/* Toast 2 */}
              <div className="animate-float-2 absolute right-0 top-32 w-full rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20" />
                  <div className="space-y-1">
                    <div className="h-2 w-28 rounded bg-primary/20" />
                    <div className="h-2 w-36 rounded bg-primary/10" />
                  </div>
                </div>
              </div>

              {/* Toast 3 */}
              <div className="animate-float-3 absolute left-10 top-60 w-full rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20" />
                  <div className="space-y-1">
                    <div className="h-2 w-20 rounded bg-primary/20" />
                    <div className="h-2 w-40 rounded bg-primary/10" />
                  </div>
                </div>
              </div>
            </div>
            <blockquote className="space-y-2">
              <p className="text-lg">
                {
                  '"StoryToast transformed our user engagement completely. Our conversion rates increased by 150% within the first month of implementation!"'
                }
              </p>
              <footer className="text-sm">John Smith, CEO</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
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
