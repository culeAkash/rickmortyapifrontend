import { getAllCharacters } from "../services/CharacterService";
import { CharacterFilterInterface, CharacterInterface, CharacterResponseInterface } from "./interfaces";

export async function getCharactersHelper(params? : CharacterFilterInterface) : Promise<CharacterInterface[]>{
    const characterData : CharacterResponseInterface = await getAllCharacters();

    const characters : CharacterInterface[] = characterData.results;

    return characters;
}