import React, { useEffect } from 'react'
import { AppDispatch, useAppDispatch } from '../redux';
import { fetchPokemonbyId } from '../redux/pokemonReducer';

interface PokemonProps {
    name: string;
    url: string;
}

const SPLIT_STRING = 'https://pokeapi.co/api/v2/pokemon/'

export default function PokemonCard({name, url} : PokemonProps) {
    const dispatch: AppDispatch = useAppDispatch();
    const urlSplit = url.split(SPLIT_STRING)
    urlSplit[1].replace('/', '')
    const id = parseInt(urlSplit[1])
    
    useEffect(() => {
        dispatch(fetchPokemonbyId(id))
      }, [dispatch]);


  return (
    <div className='shadow'>
        <img className="w-full" alt={`${name} avatar`} />
      {name}
    </div>
  )
}
