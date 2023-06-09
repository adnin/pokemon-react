import React from 'react'

interface PokemonProps {
    name: String
}

export default function PokemonCard({name} : PokemonProps) {
  return (
    <div>
      {name}
    </div>
  )
}
