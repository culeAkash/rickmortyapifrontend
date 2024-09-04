import { getAllCharacters } from "../services/CharacterService";
import { CharacterFilterInterface, CharacterInterface, CharacterResponseInterface } from "./interfaces";

export async function getCharactersHelper(params? : CharacterFilterInterface) : Promise<CharacterResponseInterface>{
    console.log(params);
    
    const characterData : CharacterResponseInterface = await getAllCharacters(params);

    return characterData;
}