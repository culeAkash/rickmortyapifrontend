export type ThemeType = "light" | "dark";


export type StatusType = "alive" | "dead" | "unknown"


export type GenderType =  "male" | "female" | "genderless" | "unknown";


export type SpeciesType = "Human" | "Alien" | "Humanoid" | "Poopybutthole" | "Mythological" | "Unknown" | "Animal" | "Disease" | "Robot" | "Cronenberg" | "Planet";


export type ChangeFilterType = (filter: { gender?: GenderType; status?: StatusType ; species?: string;name?:string;page?:number }) => void;