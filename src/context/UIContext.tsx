"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useResolution } from "@/hooks/useResolution";

const UIContext = createContext<{
  isNavCollapsed: boolean;
  toggleNav: () => void;
}>({
  isNavCollapsed: false,
  toggleNav: () => {},
});

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const { isMobile } = useResolution();
  const [isNavCollapsed, setIsNavCollapsed] = useState(isMobile ?? true);

  const toggleNav = () => setIsNavCollapsed((prev) => !prev);

  return (
    <UIContext value={{ isNavCollapsed, toggleNav }}>{children}</UIContext>
  );
};

export const useUI = () => useContext(UIContext);
