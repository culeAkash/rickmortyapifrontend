import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CharacterInterface, LocationInterface } from '../utils/interfaces';
import { getLocationHelper } from '../utils/helpers';
import CharacterCards from '../components/CharacterCards';

let locationOptions : string[] = []

for(let i=1;i<=126;i++){
    locationOptions.push("Location "+i)
}

export default function LocationPage() {

 const [locationNumber,setLocationNumber] = useState<number>(1);

    const[location,setLocation] = useState<LocationInterface>();
 const[characters,setCharacters] = useState<CharacterInterface[]>();



 const changeEpisode = (locationString : string) => {
    let locationNumber = 1
    if(locationString)
         locationNumber = parseInt(locationString.replace("Location ", ""));
    setLocationNumber(locationNumber);
 }


 useEffect(()=>{
    getLocationHelper(locationNumber).then(({location, characters})=>{
        setLocation(location)
        setCharacters(characters)
    })
 },[locationNumber])

  return (
    <React.Fragment>
        <div className='mb-4 dark:text-gray-300'>
        <h1 className="font-semibold text-4xl mb-2">
                 Location : <span className='text-blue-600'>{location?.name}</span>
            </h1>
        <p className='text-2xl font-medium'>
            Dimension : {location?.dimension}
        </p>
        <p className='text-lg font-medium'>
            Type : {location?.type}
        </p>
        </div>
        

            <Autocomplete
                disablePortal
                options={locationOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Choose Episode" />}
                onChange={(event: any, newValue: string | null)=>changeEpisode(newValue as string)}
            />

            {characters && <CharacterCards characters={characters}/>}
    </React.Fragment>
  )
}
