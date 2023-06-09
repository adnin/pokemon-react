import React from 'react'
import { PokemonTypes } from '../interfaces/PokemonTypes'

export default function PokemonBadge({type}: PokemonTypes) {
    
  return (
    <div>{type.name}</div>
  )
}