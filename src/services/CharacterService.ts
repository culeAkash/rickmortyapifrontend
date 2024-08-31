import { myAxios } from "./myAxios"

export const getAllCharacters = async (pageNumber? : number)=>{
    let response = await myAxios.get("/character",{
        params : {
            page : pageNumber
        }
    })
    const data = response.data;

    console.log(data);
}