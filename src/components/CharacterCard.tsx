import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { CharacterInterface } from "../utils/interfaces";

export default function CharacterCard({characterData}:{characterData:CharacterInterface}) {
    return (
        <div className="text-left w-fit h-fit bg-slate-300 dark:bg-white border-2 border-blue-600 dark:border-green-600 rounded-md shadow-md p-4 relative">
            <div className={`text-lg w-fit font-semibold ${characterData.status === "Dead" ? " bg-red-600" : characterData.status === "Alive" ? "bg-green-600" : "bg-gray-600"} absolute left-5 top-5 rounded-sm text-white border-1 border-black px-2`}>
                {characterData.status}
            </div>
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