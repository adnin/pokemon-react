import { useEffect, useState } from 'react'
import BadgeColor from '../utilities/BadgeColor'
import { IPokemonTypes } from '../interfaces/PokemonTypes'

export default function PokemonBadge({type}: IPokemonTypes) {
  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(BadgeColor(type.name))
  }, [])


  return (
    <>
        {color && (<div className={`${color} rounded-md shadow-md text-center font-bold p-1`}>{type.name}</div>)}
    </>
  )
}