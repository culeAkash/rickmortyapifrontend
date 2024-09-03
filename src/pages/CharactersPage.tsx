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

        const [filters,setFilters] = useState<CharacterFilterInterface | undefined>();

            const changeFilter = ({gender=undefined,status=undefined,species = undefined}:{
                gender ?: GenderType | undefined,
                status ?: StatusType | undefined,
                species ?:string | undefined
            }) =>{
            const filter : CharacterFilterInterface = {
                status : status,
                gender : gender,
                species : species
            }

            setFilters(filter);
        }

        useEffect(()=>{
            getCharactersHelper(filters).then(newCharacters => setCharacters(newCharacters))
        },[filters])

    return(
        <React.Fragment>
            <h1 className="font-mono text-4xl">
                Characters
            </h1>
            <SearchBar/>
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