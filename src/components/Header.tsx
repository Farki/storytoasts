"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center px-8 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <Logo height="70" />
        </Link>

        <div className="flex-1 flex justify-end">
          <nav className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-lg hover:text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              className="text-lg bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link href="/signup">Sign up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
