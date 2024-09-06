import { useContext } from "react"
import { CharacterContext } from "../context/CharacterContext"
import { GenderType, StatusType } from "../utils/types";
import { CharacterFilterInterface } from "../utils/interfaces";
import { getCharactersHelper } from "../utils/helpers";


export const useCharacters = () =>{
    const context = useContext(CharacterContext);

    if(context==null)
        throw new Error("useCharacters must be used within a CharactersProvider")

    const {characters,setCharacters,pageInfo,setPageInfo} = context


    const changeCharacters = (filters : CharacterFilterInterface | undefined) =>{
    

    console.log(filters);
    

    getCharactersHelper(filters).then(newCharacterData=>{
        setCharacters(newCharacterData?.results)
        const count = newCharacterData?.info?.pages;
        console.log(newCharacterData?.info);
        
        setPageInfo({pages:count});
    })
}

    

    return {
        characters,
        changeCharacters,pageInfo};
}