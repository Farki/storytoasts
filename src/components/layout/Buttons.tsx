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
    <div className="flex-1 flex justify-end">
      <nav className="flex items-center space-x-4">
        {status === "loading" ? (
          <Skeleton className="w-20 h-11 rounded-md" />
        ) : user ? (
          <Button
            variant="ghost"
            className="text-white"
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
