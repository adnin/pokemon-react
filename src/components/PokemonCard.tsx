import React, { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'

import { AppDispatch, useAppDispatch } from '../redux';
import { fetchPokemonbyId } from '../redux/pokemonReducer';
import { PokemonDetails } from '../interfaces/Pokemon';
import { PokemonTypes } from '../interfaces/PokemonTypes';
import PokemonBadge from './PokemonBadge';

interface PokemonProps {
    name: string;
    url: string;
}

const SPLIT_STRING = 'https://pokeapi.co/api/v2/pokemon/'

const Element = (props: any) => {
    return (
      <ContentLoader
        backgroundColor="#ffe976"
        foregroundColor="#fed87d"
        speed={3}
        {...props}
      >
        <rect x="0" y="0" rx="3" ry="3" width="400" height="560" />
      </ContentLoader>
    );
  };

export default function PokemonCard({name, url} : PokemonProps) {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null)
    const dispatch: AppDispatch = useAppDispatch();
    const urlSplit = url.split(SPLIT_STRING)
    urlSplit[1].replace('/', '')
    const id = parseInt(urlSplit[1])

    useEffect(() => {
        const pokemon = dispatch(fetchPokemonbyId(id))
        pokemon.then((details) => {
            const result = details.payload as PokemonDetails
            setPokemonDetails(result)
        })
      }, [dispatch]);

  return (
    <div className='shadow bg-card-bg hover:bg-card-bg-hover hover:-translate-y-1 hover:scale-105 hover:border-2 duration-300 rounded border-4 border-card-border-color'>
        {pokemonDetails ? (
            <>
            <img className="w-full" src={pokemonDetails.sprites.front_shiny} alt={`${name} avatar`} />
            <h1 className='text-center font-bold text-card-font-color text-xl capitalize mb-4'>{name}</h1>
            <div className='card-container bg-card-name-bg p-2'>
            <div className="grid grid-cols-3 gap-2">
                {pokemonDetails.types.map((pokemonTypes: PokemonTypes, i) => (
                    <PokemonBadge key={i} slot={pokemonTypes.slot} type={pokemonTypes.type} />
                ))}
            </div>
            </div>
            </>
            ) : (
            <div style={{ width: "100%", border: "1px solid" }}>
                <Element viewBox="0 0 400 560" />
            </div>)
        }

    </div>
  )
}
