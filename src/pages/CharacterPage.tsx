import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterInterface } from '../utils/interfaces'
import { getCharacterFromId } from '../services/CharacterService'
import { getCharacterFromIdHelper } from '../utils/helpers'

export default function CharacterPage() {

    const {id} = useParams()

    const [character,setCharacter] = useState<CharacterInterface>();

    useEffect(()=>{
        getCharacterFromIdHelper(Number.parseInt(id as string)).then((data)=>{
        setCharacter(data)
    })
    },[]) 

  return (
    <div className='flex container  w-full h-full justify-center'>
        <div className='flex flex-col'>
        <h1 className="font-semibold text-4xl mb-4 text-center">
            <span className='text-blue-600'>{character?.name}</span>
        </h1>
        <img src={character?.image} alt={character?.name} />
        <div className={`w-full text-xl  font-bold p-2 ${character?.status === "Dead" ? " bg-red-600" : character?.status === "Alive" ? "bg-green-700" : "bg-gray-600"} rounded-sm text-white border-1 border-black mt-3 `}>
            <span className='text-center'>{character?.status}</span>
        </div>
        <div className='flex flex-col mt-3 items-start dark:text-gray-300'>
            <div className='text-xl'><span className='font-semibold'>Gender :</span><span> {character?.gender}</span></div>
            <div className='text-xl'><span className='font-semibold'>Location :</span><span> {character?.location.name}</span></div>
            <div className='text-xl'><span className='font-semibold'>Origin :</span><span> {character?.origin.name}</span></div>
            <div className='text-xl'><span className='font-semibold'>Species :</span><span> {character?.species}</span></div>
        </div>
        </div>
        
    </div>
  )
}
