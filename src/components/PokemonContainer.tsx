import { useEffect, useState } from 'react'

import { AppDispatch, useAppDispatch } from '../redux';
import { fetchPokemonbyId } from '../redux/pokemonReducer';

import CardContentLoader from './CardContentLoader';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import { IPokemonDetails } from '../interfaces/PokemonDetails';
import { IPokemon } from '../interfaces/Pokemon';

const SPLIT_STRING = '/pokemon/'

export default function PokemonContainer({url} : IPokemon) {

    const navigate = useNavigate();
    
    const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null)
    const dispatch: AppDispatch = useAppDispatch();
    const urlSplit = url.split(SPLIT_STRING)
    const id = parseInt(urlSplit[1])

    const handleClick = () => navigate(`pokemon/${id}`);

    useEffect(() => {
        const pokemon = dispatch(fetchPokemonbyId(id))
        pokemon.then((details) => {
            const result = details.payload as IPokemonDetails
            setPokemonDetails(result)
        })
      }, [dispatch]);
    
  return (
    <div onClick={handleClick} className='shadow cursor-pointer bg-card-bg hover:bg-card-bg-hover hover:-translate-y-1 hover:scale-105 hover:border-2 duration-300 rounded border-4 border-card-border-color'>
        {pokemonDetails ? (
            <PokemonCard {...pokemonDetails} />
            ) : (
            <div style={{ width: "100%", border: "1px solid" }}>
                <CardContentLoader viewBox="0 0 400 560" />
            </div>)
        }

    </div>
  )
}
