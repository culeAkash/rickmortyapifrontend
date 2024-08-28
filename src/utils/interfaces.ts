import { ThemeType } from "./types";

export interface ThemeContextInterface {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
