import { CharacterInterface } from "../utils/interfaces";
import CharacterCard from "./CharacterCard";

export default function CharacterCards({characters}:{characters:CharacterInterface[]}){


    return (
        <div className="grid grid-cols-3 gap-3 max-w-full px-3">
            {characters.map((characterData)=>{
                return (
                    <CharacterCard characterData = {characterData}/>
                )
            })}
           
        </div>
    )
}