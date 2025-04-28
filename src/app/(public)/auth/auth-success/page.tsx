import { Card } from "@/components/ui/card";
import React from "react";
import { CheckCircle2, LogIn, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/routes";

export default function AuthSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background bg-gradient-to-br from-purple-600 via-blue-400 to-purple-600 p-4">
      <Card className="w-full max-w-3xl p-8 duration-1000 animate-in fade-in-0 slide-in-from-bottom-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-start lg:border-r lg:pr-8">
            <div className="relative">
              <div className="h-24 w-24 animate-pulse rounded-full bg-primary/10" />
              <Mail className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform animate-bounce text-primary" />
              <div className="absolute -right-2 -top-2">
                <CheckCircle2 className="h-8 w-8 text-green-500 delay-500 duration-1000 animate-in zoom-in-50" />
              </div>
            </div>
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent delay-300 duration-1000 animate-in fade-in-0">
                Check your email
              </h1>
              <p className="text-muted-foreground delay-500 duration-1000 animate-in fade-in-0">
                We&apos;ve sent a magic link to your email address.
                <br />
                Click the link to sign in to your account.
              </p>
            </div>
          </div>

          <div className="space-y-8 delay-700 duration-1000 animate-in fade-in-0">
            <div className="space-y-4">
              <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">Next steps:</span>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li>Check your email inbox (spam too)</li>
                  <li>Click the magic link we sent you</li>
                  <li>You&apos;ll be automatically signed in</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-3">
                <Button
                  size="lg"
                  variant="outline"
                  className="group w-full"
                  asChild
                >
                  <Link href={PUBLIC_ROUTES.SignIn}>
                    <span className="inline-flex items-center">
                      Back to login
                      <LogIn className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  {"Didn't receive the email? "}
                  <Link
                    href={PUBLIC_ROUTES.SignIn}
                    className="underline underline-offset-4 transition-colors hover:text-primary"
                  >
                    Try again
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
