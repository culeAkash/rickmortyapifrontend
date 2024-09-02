import { createContext, useState } from "react";


export const CharacterContext = createContext();

export const CharacterProvider = ({ children }: { children: React.ReactNode })=>{

    const [characters,setCharacters] = useState({});

    return(
        <CharacterContext.Provider value={characters}>
            {children}
        </CharacterContext.Provider>
    )
}