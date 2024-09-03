import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeContextInterface } from "../utils/interfaces";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
