import { CharacterFilterInterface, CharacterResponseInterface } from "../utils/interfaces";
import { myAxios } from "./myAxios"


const params : CharacterFilterInterface = {
    page : 3
}


export const getAllCharacters = async (params? : CharacterFilterInterface) =>{
    console.log(params);
    
    let data = myAxios.get("/character",{
        params : params
    }).then(response => response.data).catch(error => {} );
    
    return data;
}