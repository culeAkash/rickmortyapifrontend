import { Autocomplete, TextField } from "@mui/material";

const top100Films = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
]

export default function Controls() {
    return (
        <div className="flex flex-col gap-2 place-content-center">
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Status" />}
            />
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Species" />}
            />
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Gender" />}
            />
        </div>
    )
}