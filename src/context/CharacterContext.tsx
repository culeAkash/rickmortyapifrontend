import { createContext, useCallback, useEffect, useState } from "react";
import { CharacterFilterInterface, CharacterInterface } from "../utils/interfaces";
import { getCharactersHelper } from "../utils/helpers";




interface CharacterContextInterface{
    characters : CharacterInterface[]
    setCharacters : (characters : CharacterInterface[]) => void
}


export const CharacterContext = createContext<CharacterContextInterface | undefined>(
    undefined
);


export const CharacterProvider = ({ children }: { children: React.ReactNode })=>{

    const [characters,setCharacters] = useState<CharacterInterface[]>([]);

    return(
        <CharacterContext.Provider value={{characters,setCharacters}}>
            {children}
        </CharacterContext.Provider>
    )
}