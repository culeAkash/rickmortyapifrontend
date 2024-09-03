import { CharacterFilterInterface, CharacterResponseInterface } from "../utils/interfaces";
import { myAxios } from "./myAxios"


const params : CharacterFilterInterface = {
    page : 3
}


export const getAllCharacters = async (params? : CharacterFilterInterface)=>{
    let response = await myAxios.get("/character",{
        params : params
    })
    const data : CharacterResponseInterface = response.data;
    return data;
}