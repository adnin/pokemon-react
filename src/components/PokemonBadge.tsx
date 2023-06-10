import { useEffect, useState } from 'react'
import BadgeColor from '../utilities/BadgeColor'
import { IPokemonTypes } from '../interfaces/PokemonTypes'

export default function PokemonBadge({type}: IPokemonTypes) {
    
  const [color, setColor] = useState('')
  const {name} = type;

  useEffect(() => {
    setColor(BadgeColor(name))
  }, [])


  return (
    <>
        {color && (<div className={`${color} rounded-md shadow-md text-center font-bold p-1`}>{name}</div>)}
    </>
  )
}