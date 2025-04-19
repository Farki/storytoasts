"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, Code, LogOut } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: Settings },
    { name: "Notifications", href: "/admin/notifications", icon: Code },
    { name: "Integration", href: "/admin/integration", icon: Code },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="relative flex min-h-screen">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-20 flex h-full flex-col border-r bg-background transition-all",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/admin" className="flex items-center gap-2">
            <Logo className="text-white" />
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
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                    isActive ? "bg-accent" : "transparent",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="border-t p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            asChild
          >
            <Link href="/logout">
              <LogOut className="h-4 w-4" />
              {!isCollapsed && <span>Logout</span>}
            </Link>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div
        className={cn("flex-1 transition-all", isCollapsed ? "ml-16" : "ml-64")}
      >
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
          <div className="flex h-16 items-center gap-4 px-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <span className="sr-only">Toggle sidebar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
