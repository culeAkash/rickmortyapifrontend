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



export default function Controls(
    {
        changeGender,
        changeStatus,
        changeSpecies
    }:{
        changeGender : (gender: GenderType) => void,
        changeStatus : (status: StatusType) => void,
        changeSpecies : (species: SpeciesType) => void
    }
) {

    return (
        <div className="flex flex-col gap-2 place-content-center">
            <Autocomplete
                disablePortal
                options={statusOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Status" />}
                onChange={(event: any, newValue: string | null)=>changeStatus(newValue as StatusType)}
            />
            <Autocomplete
                disablePortal
                options={speciesOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Species" />}
                onChange={(event: any, newValue: string | null)=>changeSpecies(newValue as SpeciesType)}
            />
            <Autocomplete
                disablePortal
                options={genderOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Gender" />}
                onChange={(event: any, newValue: string | null)=>changeGender(newValue as GenderType)}
            />
        </div>
    )
}