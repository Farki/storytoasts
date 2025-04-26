"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { PUBLIC_ROUTES } from "@/routes";
import Link from "next/link";

export default function SignOutButton() {
  return (
    <Button
      variant="ghost"
      className="text-white"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <Link href={PUBLIC_ROUTES.SignIn}>Sign Out</Link>
    </Button>
  );
}
