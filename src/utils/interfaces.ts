import { ThemeType } from "./types";

export interface ThemeContextInterface {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export interface CharacterInterface{
  info:{
    count : number,
    pages: number,
    next : string | null,
    prev : string | null
  },
  results:{

  }
}