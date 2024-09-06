import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CharacterInterface, EpisodeInterface } from '../utils/interfaces'
import { getEpisode } from '../services/EpisodeService'
import { getEpisodeHelper } from '../utils/helpers'
import CharacterCards from '../components/CharacterCards'

let episodeOptions : string[] = []

for(let i=1;i<=51;i++){
    episodeOptions.push("Episode "+i)
}



export default function EpisodePage() {

 const [episodeNumber,setEpisodeNumber] = useState<number>(1);


 const[episode,setEpisode] = useState<EpisodeInterface>();
 const[characters,setCharacters] = useState<CharacterInterface[]>();



 const changeEpisode = (episodeString : string) => {
    let episodeNumber = 1
    if(episodeString)
         episodeNumber = parseInt(episodeString.replace("Episode ", ""));
    setEpisodeNumber(episodeNumber);
 }


 useEffect(()=>{
    getEpisodeHelper(episodeNumber).then(({episode, characters})=>{
        setEpisode(episode)
        setCharacters(characters)
    })
 },[episodeNumber])


  return (
    <React.Fragment>
        <div className='mb-4 dark:text-gray-300'>
        <h1 className="font-semibold text-4xl mb-2">
                Episode Name : <span className='text-blue-600'>{episode?.name}</span>
            </h1>
        <p className='text-2xl font-medium'>
            Air Date : {episode?.air_date}
        </p>
        </div>
        

            <Autocomplete
                disablePortal
                options={episodeOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Choose Episode" />}
                onChange={(event: any, newValue: string | null)=>changeEpisode(newValue as string)}
            />

            {characters && <CharacterCards characters={characters}/>}
    </React.Fragment>
  )
}

