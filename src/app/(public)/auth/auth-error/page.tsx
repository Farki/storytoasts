import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/routes";

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background bg-gradient-to-br from-purple-600 via-blue-400 to-purple-600 p-4">
      <Card className="w-full max-w-3xl p-8 duration-1000 animate-in fade-in-0 slide-in-from-bottom-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-start lg:border-r lg:pr-8">
            <div className="relative">
              <div className="flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-destructive/10">
                <Mail className="h-12 w-12 animate-bounce text-destructive" />
              </div>
              <div className="absolute -right-2 -top-2">
                <AlertTriangle className="h-8 w-8 text-destructive delay-500 duration-1000 animate-in zoom-in-50" />
              </div>
            </div>
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="bg-gradient-to-r from-destructive to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent delay-300 duration-1000 animate-in fade-in-0">
                Magic Link Error
              </h1>
              <p className="text-muted-foreground delay-500 duration-1000 animate-in fade-in-0">
                The magic link you tried to use has expired or is invalid.
                <br />
                Please request a new one to sign in.
              </p>
            </div>
          </div>

          <div className="space-y-8 delay-700 duration-1000 animate-in fade-in-0">
            <div className="space-y-4">
              <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">What happened?</span>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li>Magic links are valid for a limited time</li>
                  <li>This link may have already been used</li>
                  <li>The link might have been modified</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-3">
                <Button
                  size="lg"
                  variant="default"
                  className="group w-full"
                  asChild
                >
                  <Link href={PUBLIC_ROUTES.SignIn}>
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Try Again
                  </Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Need help?{" "}
                  <a
                    href="mailto:support@storytoast.com"
                    className="underline underline-offset-4 transition-colors hover:text-primary"
                  >
                    Contact support
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
