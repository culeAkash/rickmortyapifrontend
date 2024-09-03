import { Autocomplete, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { GenderType, StatusType } from "../utils/types";

const genderOptions : GenderType[] =
[
    "male","female","genderless","unknown"
]

const statusOptions : StatusType[] = [
    "alive","dead","unknown"
]

const speciesOptions : string[] =[
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

type ChangeFilterType = (filter: { gender?: GenderType; status?: StatusType ; species?: string }) => void;

export default function Controls({changeFilter}:{changeFilter : ChangeFilterType}) {

    const [status,setStatus] = useState<StatusType | undefined>(undefined);

    useEffect(()=>{
        changeFilter({status})
    },[status])

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
            />
            <Autocomplete
                disablePortal
                options={genderOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Gender" />}
            />
        </div>
    )
}