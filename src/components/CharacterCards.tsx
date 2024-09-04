import { CharacterInterface } from "../utils/interfaces";
import CharacterCard from "./CharacterCard";

export default function CharacterCards({characters}:{characters:CharacterInterface[]}){

    console.log(characters);
    

    if(characters===undefined) return <div className="text-center mt-10">No characters found</div>
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-3 gap-2 max-w-full px-3 mt-4">
            {characters.map((characterData)=>{
                return (
                    <CharacterCard characterData = {characterData}/>
                )
            })}
           
        </div>
    )
}