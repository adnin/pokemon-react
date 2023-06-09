import { useEffect, useState } from 'react'
import { PokemonTypes } from '../interfaces/PokemonTypes'
import BadgeColor from '../utilities/BadgeColor'

export default function PokemonBadge({type}: PokemonTypes) {
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