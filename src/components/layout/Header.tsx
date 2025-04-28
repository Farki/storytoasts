import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import React from "react";
import Buttons from "@/components/layout/Buttons";

export async function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full justify-center border-b border-dark backdrop-blur supports-[backdrop-filter]:bg-dark/50">
      <div className="container flex items-center px-8 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-8 md:h-14" />
        </Link>

        <Buttons />
      </div>
    </header>
  );
}
