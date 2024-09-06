import axios from "axios";
import { CharacterInterface, LocationInterface } from "../utils/interfaces";
import { myAxios } from "./myAxios";

export const getLocation = async (locationNumber: number): Promise<LocationInterface> => {
    try {
        const response = await myAxios.get<LocationInterface>(`/location/${locationNumber}`);
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