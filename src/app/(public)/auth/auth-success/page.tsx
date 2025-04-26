import { Card } from "@/components/ui/card";
import React from "react";
import { ArrowLeft, CheckCircle2, LogIn, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/routes";

export default function AuthSuccessPage() {
  return (
    <div className="min-h-screen bg-background w-full bg-gradient-to-br from-purple-600 via-blue-400 to-purple-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl p-8 animate-in fade-in-0 duration-1000 slide-in-from-bottom-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-start lg:pr-8 lg:border-r">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary/10 animate-pulse" />
              <Mail className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-primary animate-bounce" />
              <div className="absolute -right-2 -top-2">
                <CheckCircle2 className="h-8 w-8 text-green-500 animate-in zoom-in-50 duration-1000 delay-500" />
              </div>
            </div>
            <div className="text-center lg:text-left space-y-2">
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-in fade-in-0 duration-1000 delay-300">
                Check your email
              </h1>
              <p className="text-muted-foreground animate-in fade-in-0 duration-1000 delay-500">
                We&apos;ve sent a magic link to your email address.
                <br />
                Click the link to sign in to your account.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-in fade-in-0 duration-1000 delay-700">
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">Next steps:</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Check your email inbox (spam too)</li>
                  <li>Click the magic link we sent you</li>
                  <li>You&apos;ll be automatically signed in</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-3">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full group"
                  asChild
                >
                  <Link href={PUBLIC_ROUTES.SignIn}>
                    <span className="inline-flex items-center">
                      Back to login
                      <LogIn className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  {"Didn't receive the email? "}
                  <Link
                    href={PUBLIC_ROUTES.SignIn}
                    className="underline underline-offset-4 hover:text-primary transition-colors"
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
