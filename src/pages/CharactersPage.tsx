import React from "react";
import SearchBar from "../components/SearchBar";
import Controls from "../components/Controls";
import CharacterCards from "../components/CharacterCards";
import PaginationComponent from "../components/PaginationComponent";

export default function CharactersPage(){
    return(
        <React.Fragment>
            <h1 className="font-mono text-4xl">
                Characters
            </h1>
            <SearchBar/>
            <div className="flex flex-col md:flex-row min-h-full mt-8">
                <div className="basis-1/4">
                    <Controls/>
                    </div>
                <div className="basis-3/4 content-center">
                <CharacterCards/>
                <PaginationComponent/>
                </div>
            </div>
        </React.Fragment>
    )
}