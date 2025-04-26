import { Card } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft, Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background w-full bg-gradient-to-br from-purple-600 via-blue-400 to-purple-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl p-8 animate-in fade-in-0 duration-1000 slide-in-from-bottom-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-start lg:pr-8 lg:border-r">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary/10 animate-pulse flex items-center justify-center">
                <Wrench className="h-12 w-12 text-primary animate-bounce" />
              </div>
              <div className="absolute -right-2 -top-2">
                <AlertTriangle className="h-8 w-8 text-yellow-500 animate-in zoom-in-50 duration-1000 delay-500" />
              </div>
            </div>
            <div className="text-center lg:text-left space-y-2">
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-in fade-in-0 duration-1000 delay-300">
                Under Maintenance
              </h1>
              <p className="text-muted-foreground animate-in fade-in-0 duration-1000 delay-500">
                We&apos;re currently performing scheduled maintenance to improve
                your experience.
                <br />
                Please check back soon.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-in fade-in-0 duration-1000 delay-700">
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Wrench className="h-5 w-5 text-primary" />
                  <span className="font-medium">What&apos;s happening?</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>System upgrades and improvements</li>
                  <li>Performance optimization</li>
                  <li>Security enhancements</li>
                </ul>
              </div>
            </div>

            <div className="text-sm text-center text-muted-foreground">
              <p>Need immediate assistance?</p>
              <a
                href="mailto:support@storytoast.com"
                className="text-primary hover:underline"
              >
                Contact our support team
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
