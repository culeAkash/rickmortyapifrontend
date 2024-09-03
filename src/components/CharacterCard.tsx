import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { CharacterInterface } from "../utils/interfaces";

export default function CharacterCard({characterData}:{characterData:CharacterInterface}) {
    return (
        <div className="text-left w-full h-fit bg-slate-300 dark:bg-white border-2 border-blue-600 dark:border-green-600 rounded-md shadow-md p-4">
            <img src={characterData.image} alt="" />
            <div>
                <h3 className="text-xl font-bold">{characterData.name}</h3>
                <div className="mt-7">
                    <p>Last Location</p>
                    <h5 className="font-semibold">{characterData.location.name}</h5>
                </div> 
            </div>
        </div>
    )
}