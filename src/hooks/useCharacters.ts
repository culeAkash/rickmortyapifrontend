import { useContext } from "react"
import { CharacterContext } from "../context/CharacterContext"


export const useCharacters = () =>{
    const context = useContext(CharacterContext);

    if(context==null)
        throw new Error("useCharacters must be used within a CharactersProvider")

    return context;
}