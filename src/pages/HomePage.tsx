import { Route, Routes } from "react-router-dom";
import CharactersPage from "./CharactersPage";
import EpisodePage from "./EpisodePage";
import CharacterPage from "./CharacterPage";
import LocationPage from "./LocationPage";

export default function HomePage(){
    return(
        <div className="min-h-full bg-slate-300 dark:bg-neutral-600 text-center px-16 py-10">
        <Routes>
            <Route index element={<CharactersPage />} />
            <Route path="/Characters/:id" element={<CharacterPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/episodes" element={<EpisodePage/>}/>
            <Route path="/locations" element={<LocationPage/>}/>
        </Routes>

        </div>
    )
}