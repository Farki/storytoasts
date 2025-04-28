"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/routes";
import { signOut, useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Buttons() {
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-1 justify-end">
      <nav className="flex items-center space-x-4">
        {status === "loading" ? (
          <Skeleton className="h-11 w-20 rounded-md" />
        ) : user ? (
          <Button
            variant="outline"
            className="border-white/20 bg-transparent text-white"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </Button>
        ) : (
          <Button variant="default" asChild>
            <Link href={PUBLIC_ROUTES.SignIn}>Sign In</Link>
          </Button>
        )}
      </nav>
    </div>
  );
}
