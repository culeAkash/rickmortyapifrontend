import { CharacterFilterInterface, CharacterInterface, CharacterResponseInterface } from "../utils/interfaces";
import { myAxios } from "./myAxios"

export const getAllCharacters = async (params? : CharacterFilterInterface) =>{
    console.log(params);
    
    let data = myAxios.get("/character",{
        params : params
    }).then(response => response.data).catch(error => {} );
    
    return data;
}


export const getCharacterFromId = async (id: number)  => {
    const response = await myAxios.get(`/character/${id}`)
    console.log(response);
    return response
}