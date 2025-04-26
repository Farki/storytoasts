"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const UIContext = createContext<{
  isNavCollapsed: boolean;
  toggleNav: () => void;
}>({
  isNavCollapsed: false,
  toggleNav: () => {},
});

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleNav = () => setIsNavCollapsed((prev) => !prev);

  return (
    <UIContext value={{ isNavCollapsed, toggleNav }}>{children}</UIContext>
  );
};

export const useUI = () => useContext(UIContext);
