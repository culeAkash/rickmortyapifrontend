import { createContext, useState } from "react";
import React from "react";
import { ThemeType } from "../utils/types";
import { ThemeContextInterface } from "../utils/interfaces";

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
