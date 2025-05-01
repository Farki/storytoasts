import { useEffect, useState } from "react";

export const useResolution = () => {
  const [screenSize, setScreenSize] = useState<number | null>(null);

  const handleResize = () => setScreenSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const isMobile = screenSize ? screenSize <= 768 : null;
  const isTablet = screenSize ? screenSize <= 1024 : null;
  const isDesktop = screenSize ? screenSize > 1024 : null;

  return { isMobile, isTablet, isDesktop };
};
