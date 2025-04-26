import React from "react";
import { LoaderCircle } from "lucide-react";

export default function LoadingPageLoader() {
  return (
    <div className="min-h-screen bg-background w-full flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-primary/10 animate-pulse flex items-center justify-center">
          <LoaderCircle className="w-8 h-8 text-primary animate-spin" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-white">Loading</h2>
        <p className="text-sm text-muted-foreground">Please wait...</p>
      </div>
    </div>
  );
}
