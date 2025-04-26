import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/routes";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-background w-full bg-gradient-to-br from-purple-600 via-blue-400 to-purple-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl p-8 animate-in fade-in-0 duration-1000 slide-in-from-bottom-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-start lg:pr-8 lg:border-r">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-destructive/10 animate-pulse flex items-center justify-center">
                <Mail className="h-12 w-12 text-destructive animate-bounce" />
              </div>
              <div className="absolute -right-2 -top-2">
                <AlertTriangle className="h-8 w-8 text-destructive animate-in zoom-in-50 duration-1000 delay-500" />
              </div>
            </div>
            <div className="text-center lg:text-left space-y-2">
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-destructive to-purple-600 bg-clip-text text-transparent animate-in fade-in-0 duration-1000 delay-300">
                Magic Link Expired
              </h1>
              <p className="text-muted-foreground animate-in fade-in-0 duration-1000 delay-500">
                The magic link you tried to use has expired or is invalid.
                <br />
                Please request a new one to sign in.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-in fade-in-0 duration-1000 delay-700">
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">What happened?</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Magic links are valid for a limited time</li>
                  <li>This link may have already been used</li>
                  <li>The link might have been modified</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-3">
                <Button
                  size="lg"
                  variant="default"
                  className="w-full group"
                  asChild
                >
                  <Link href={PUBLIC_ROUTES.SignIn}>
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Try Again
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Need help?{" "}
                  <a
                    href="mailto:support@storytoast.com"
                    className="underline underline-offset-4 hover:text-primary transition-colors"
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
