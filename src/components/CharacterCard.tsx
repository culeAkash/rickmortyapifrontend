import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function CharacterCard() {
    return (
        <div className="text-left w-full h-fit bg-slate-300 dark:bg-white border-2 border-blue-600 dark:border-green-600 rounded-md shadow-md p-4">
            <img src="" alt="" />
            <div>
                <h3>Name</h3>
                <div className="mt-10">
                    <p>Last Location</p>
                    <h5>Location name</h5>
                </div> 
            </div>
        </div>
    )
}