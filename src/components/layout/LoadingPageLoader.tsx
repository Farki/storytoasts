import React from "react";
import { LoaderCircle } from "lucide-react";

export default function LoadingPageLoader() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background">
      <div className="relative">
        <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-primary/10">
          <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-white">Loading</h2>
        <p className="text-sm text-muted-foreground">Please wait...</p>
      </div>
    </div>
  );
}
