import { createContext, useCallback, useEffect, useState } from "react";
import { CharacterFilterInterface, CharacterInterface, PageInfoInterface } from "../utils/interfaces";
import { getCharactersHelper } from "../utils/helpers";




interface CharacterContextInterface{
    characters : CharacterInterface[]
    setCharacters : (characters : CharacterInterface[]) => void
    pageInfo : PageInfoInterface
    setPageInfo : (pageInfo : PageInfoInterface) => void
}


export const CharacterContext = createContext<CharacterContextInterface | undefined>(
    undefined
);


export const CharacterProvider = ({ children }: { children: React.ReactNode })=>{

    const [characters,setCharacters] = useState<CharacterInterface[]>([]);
    const [pageInfo,setPageInfo] = useState<PageInfoInterface>({
        pages : 0,
    });

    return(
        <CharacterContext.Provider value={{characters,setCharacters,pageInfo,setPageInfo}}>
            {children}
        </CharacterContext.Provider>
    )
}