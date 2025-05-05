"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// Create a context for theme state
export const ThemeContext = createContext<{
  theme: string | undefined;
  setTheme: (theme: string) => void;
}>({
  theme: undefined,
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);