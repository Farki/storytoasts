"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useUI } from "@/context/UIContext";

export default function Header() {
  const { toggleNav } = useUI();

  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center gap-4 px-6">
        <Button variant="ghost" size="icon" onClick={() => toggleNav()}>
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
            className="h-4 w-4 text-white"
          >
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </Button>
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-white">Admin Dashboard</h1>
        </div>
      </div>
    </header>
  );
}
