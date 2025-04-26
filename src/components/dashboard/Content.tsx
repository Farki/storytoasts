"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useUI } from "@/context/UIContext";

export default function Content({ children }: { children: React.ReactNode }) {
  const { isNavCollapsed } = useUI();
  return (
    <div
      className={cn(
        "flex-1 transition-all",
        isNavCollapsed ? "ml-16" : "ml-64",
      )}
    >
      {children}
    </div>
  );
}
