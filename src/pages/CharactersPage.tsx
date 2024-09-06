import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Controls from "../components/Controls";
import CharacterCards from "../components/CharacterCards";
import PaginationComponent from "../components/PaginationComponent";
import { useCharacters } from "../hooks/useCharacters";
import { CharacterFilterInterface } from "../utils/interfaces";
import { getCharactersHelper } from "../utils/helpers";
import { GenderType, SpeciesType, StatusType } from "../utils/types";



export default function CharactersPage(){
        const {characters,changeCharacters,pageInfo} = useCharacters()
        console.log(characters);

        


        const [filters,setFilters] = useState<CharacterFilterInterface>({
            name : "",
            status : undefined,
            species : undefined,
            gender : undefined,
            page : 1
        });


        const handleFilterChange = (filterName: keyof CharacterFilterInterface, value: any) => {
            setFilters({ ...filters, [filterName]: value, page: 1 });
          };


        const changePage = (page : number)=>{
            setFilters({...filters,page})
        }

        // const searchName = (name : string)=>{
        //     setFilters({...filters,name,page:1})
        // }


        useEffect(()=>{
            changeCharacters(filters)
        },[filters])


        
        

    return(
        <React.Fragment>
            <h1 className="font-mono text-4xl mb-2 dark:text-gray-300">
                Characters
            </h1>
            <SearchBar changeSearchTerm={(name :string) => handleFilterChange('name', name)}/>
            <div className="flex flex-col md:flex-row min-h-full mt-8">
                <div className="basis-1/4">
                    <Controls changeStatus={(status) => handleFilterChange('status', status)}
                    changeGender={(gender) => handleFilterChange('gender', gender)}
                    changeSpecies={(species) => handleFilterChange('species', species)}/>
                    </div>
                <div className="basis-3/4 flex flex-col items-center">
                <CharacterCards characters={characters}/>
                <PaginationComponent pageInfo={pageInfo} changePage={changePage} page={filters.page ?? 1}/>
                </div>
            </div>
        </React.Fragment>
    )
}