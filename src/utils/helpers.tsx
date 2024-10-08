import { getAllCharacters, getCharacterFromId } from "../services/CharacterService";
import { getCharacter, getEpisode } from "../services/EpisodeService";
import { getLocation } from "../services/LocationService";
import { CharacterFilterInterface, CharacterInterface, CharacterResponseInterface, EpisodeInterface, LocationInterface} from "./interfaces";

export async function getCharactersHelper(params? : CharacterFilterInterface) : Promise<CharacterResponseInterface>{
    console.log(params);
    
    const characterData : CharacterResponseInterface = await getAllCharacters(params);

    console.log(characterData);
    

    return characterData;
}



export async function getEpisodeHelper(episodeId: number): Promise<{ episode: EpisodeInterface; characters: CharacterInterface[] }> {
    const episode = await getEpisode(episodeId);
    const characterPromises = episode.characters.map((characterUrl) => getCharacter(characterUrl));
    const characters = await Promise.all(characterPromises);

    return { episode, characters };

}

export async function getLocationHelper(locationId: number): Promise<{ location: LocationInterface; characters: CharacterInterface[] }> {
    const location = await getLocation(locationId);
    const characterPromises = location.residents.map((characterUrl) => getCharacter(characterUrl));
    const characters = await Promise.all(characterPromises);

    return { location, characters };

}


export async function getCharacterFromIdHelper(characterId: number): Promise<CharacterInterface> {
    const response = await getCharacterFromId(characterId);
    const character : CharacterInterface = await response.data;
    return character;
}


