import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Controls from "../components/Controls";
import CharacterCards from "../components/CharacterCards";
import PaginationComponent from "../components/PaginationComponent";
import { useCharacters } from "../hooks/useCharacters";
import { CharacterFilterInterface } from "../utils/interfaces";
import { getCharactersHelper } from "../utils/helpers";
import { GenderType, StatusType } from "../utils/types";

export default function CharactersPage(){
        const {characters,setCharacters} = useCharacters()
        const [page,setPage] = useState(2);

            const changeFilter = ({gender=undefined,status=undefined,species = undefined,name=undefined,page=2}:{
                gender ?: GenderType | undefined,
                status ?: StatusType | undefined,
                species ?:string | undefined
                name ?: string | undefined
                page ?: number
            }) =>{
                console.log(status);
                
            const filters : CharacterFilterInterface = {
                status : status,
                gender : gender,
                species : species,
                name : name,
                page : page
            }

            console.log(filters);
            

            getCharactersHelper(filters).then(newCharacterData=>{
                setCharacters(newCharacterData?.results)
                setPage(newCharacterData?.info?.page)
            })
        }


        console.log(characters);
        

    return(
        <React.Fragment>
            <h1 className="font-mono text-4xl mb-2">
                Characters
            </h1>
            <SearchBar changeFilter={changeFilter}/>
            <div className="flex flex-col md:flex-row min-h-full mt-8">
                <div className="basis-1/4">
                    <Controls changeFilter={changeFilter}/>
                    </div>
                <div className="basis-3/4 content-center">
                <CharacterCards characters={characters}/>
                <PaginationComponent/>
                </div>
            </div>
        </React.Fragment>
    )
}