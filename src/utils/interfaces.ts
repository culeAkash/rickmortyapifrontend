import { GenderType, StatusType, ThemeType } from "./types";

export interface ThemeContextInterface {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}




interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string,
  url: string
}


export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface PageInfoInterface{
  pages : number
}


export interface CharacterResponseInterface{
  info : PageInfoInterface
  results : CharacterInterface[]
}




export interface CharacterFilterInterface{
  name? : string,
  status? : StatusType
  species? : string
  gender? :GenderType
  page ?: number
}