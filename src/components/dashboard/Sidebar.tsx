"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  BellRing,
  Code,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";
import { useUI } from "@/context/UIContext";
import { usePathname } from "next/navigation";
import { PRIVATE_ROUTES } from "@/routes";
import { signOut } from "next-auth/react";

const navigation = [
  {
    name: "Dashboard",
    href: PRIVATE_ROUTES.Dashboard,
    icon: LayoutDashboard,
  },
  {
    name: "Notifications",
    href: PRIVATE_ROUTES.Notifications,
    icon: BellRing,
  },
  { name: "Integration", href: PRIVATE_ROUTES.Integrations, icon: Code },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const { isNavCollapsed } = useUI();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-20 flex h-full flex-col border-r bg-background transition-all",
        isNavCollapsed ? "w-16" : "w-64",
      )}
    >
      <div
        className={cn(
          "flex h-16 justify-center border-b",
          isNavCollapsed ? "px-[20%]" : "px-[30%]",
        )}
      >
        <Link href="/" className="flex">
          <Logo className="w-full" />
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex gap-3 rounded-lg px-3 py-2 text-sm text-white transition-all hover:bg-accent items-center",
                  isActive ? "bg-accent" : "transparent",
                  isNavCollapsed ? "justify-center" : "justify-start",
                )}
              >
                <item.icon className="h-4 w-4" />
                {!isNavCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
      <div
        className={cn(
          "border-t py-4 flex",
          isNavCollapsed ? "justify-center" : "justify-start",
        )}
      >
        <Button
          variant="ghost"
          className="flex gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent w-full justify-start"
          onClick={() => signOut()}
        >
          <>
            <LogOut className="h-4 w-4" />
            {!isNavCollapsed && <span>Logout</span>}
          </>
        </Button>
      </div>
    </div>
  );
}
