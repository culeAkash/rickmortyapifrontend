import { Autocomplete, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { ChangeFilterType, GenderType, SpeciesType, StatusType } from "../utils/types";

const genderOptions : GenderType[] =
[
    "male","female","genderless","unknown"
]

const statusOptions : StatusType[] = [
    "alive","dead","unknown"
]

const speciesOptions : SpeciesType[] =[
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
]



export default function Controls({changeFilter}:{changeFilter : ChangeFilterType}) {

    const [status,setStatus] = useState<StatusType | undefined>(undefined);
    const [gender,setGender] = useState<GenderType | undefined>(undefined);
    const [species,setSpecies] = useState<SpeciesType | undefined>(undefined);

    useEffect(()=>{
        console.log(status);
        changeFilter({status,gender,species})
    },[status,gender,species])

    return (
        <div className="flex flex-col gap-2 place-content-center">
            <Autocomplete
                disablePortal
                options={statusOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Status" />}
                onChange={(event: any, newValue: string | null)=>setStatus(newValue as StatusType)}
            />
            <Autocomplete
                disablePortal
                options={speciesOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Species" />}
                onChange={(event: any, newValue: string | null)=>setSpecies(newValue as SpeciesType)}
            />
            <Autocomplete
                disablePortal
                options={genderOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Gender" />}
                onChange={(event: any, newValue: string | null)=>setGender(newValue as GenderType)}
            />
        </div>
    )
}