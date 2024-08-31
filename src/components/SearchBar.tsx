import { Search } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){

    return (
        <div className="w-full mt-5 flex md:flex-row flex-col content-center gap-2">
            <input type="text" placeholder="Search for your favourite character...." className="w-4/5 md:w-3/5 h-10 rounded-lg border-2 border-cyan-900 dark:border-green-400 shadow-md p-2" />
            <button className="w-2/5 md:w-2/5 h-10 border-black dark:border-lime-700 border-2 rounded-md hover:text-cyan-400 hover:bg-gray-950 dark:text-cyan-500 dark:bg-slate-100 dark:hover:bg-slate-500">Search</button>
        </div>
    )
}