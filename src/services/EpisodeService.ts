import axios from "axios";
import { CharacterFilterInterface, CharacterInterface, EpisodeInterface, EpisodeResponseInterface } from "../utils/interfaces";
import { myAxios } from "./myAxios";


export const getEpisode = async (episodeNumber: number): Promise<EpisodeInterface> => {
    try {
        const response = await myAxios.get<EpisodeInterface>(`/episode/${episodeNumber}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const getCharacter = async (characterUrl: string): Promise<CharacterInterface> => {
    try {
        const response = await axios.get<CharacterInterface>(characterUrl);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}