import { CharacterInterface } from "../utils/interfaces";
import CharacterCard from "./CharacterCard";

export default function CharacterCards({characters}:{characters:CharacterInterface[]}){

    console.log(characters);
    
    if(characters===undefined){
        return (
            <div className="text-center">
                <p className="font-mono text-2xl">No characters found</p>
            </div>
        )
    }
    
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-3 gap-2 max-w-full px-3 mt-4">
            {characters.map((characterData)=>{
                return (
                    <CharacterCard key={characterData.id} characterData = {characterData}/>
                )
            })}
           
        </div>
    )
}