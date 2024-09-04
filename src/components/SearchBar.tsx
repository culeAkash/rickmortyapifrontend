import { Search } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { ChangeFilterType } from "../utils/types";

const DEBOUNCE_DELAY = 1000

export default function SearchBar({changeFilter}:{changeFilter : ChangeFilterType}) {

    const[searchTerm,setSearchTerm] = useState("");


    useEffect(()=>{
        const timer = setTimeout(()=>{
            changeFilter({name : searchTerm})
        },DEBOUNCE_DELAY)
        return ()=>clearTimeout(timer)
    },[searchTerm])


    return (
        
            <input type="text" 
            placeholder="Search for your favourite character...." 
            className="w-4/5 md:w-3/5 h-10 rounded-lg border-2 border-cyan-900 dark:border-green-400 shadow-md p-2" 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
        
    )
}
