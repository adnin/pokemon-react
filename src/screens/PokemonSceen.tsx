import { useEffect, useState } from 'react'
import { AppDispatch, useAppDispatch } from '../redux'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPokemonbyId } from '../redux/pokemonReducer';
import CardContentLoader from '../components/CardContentLoader';
import PokemonCard from '../components/PokemonCard';
import { IPokemonDetails } from '../interfaces/PokemonDetails';
import StatComonent from '../components/StatComonent';
import { IStats } from '../interfaces/Stat';
import Button from '../components/Button';
import Loader from '../components/Loader';

export default function PokemonSceen() {
    
    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();
    
    const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null)

    useEffect(() => {
        if (!id) {
            return
        }
        const pokemon = dispatch(fetchPokemonbyId(parseInt(id)))
        pokemon.then((details) => {
            const result = details.payload as IPokemonDetails
            setPokemonDetails(result)
        })
      }, [dispatch, id]);

  return (
    <div className='p-4 justify-center items-center mx-auto bg-home-bg h-screen overflow-x-hidden'>
            <div className="item-center justify-center">
                <img 
                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
                className="object-cover h-42 w-128 m-auto" />
            </div>
        {pokemonDetails ? (
            <>
                <div className="mt-6 max-w-sm w-full lg:max-w-full lg:flex justify-center">
                    <div className="h-1/4 lg:h-auto lg:w-1/4 flex-none overflow-hidden bg-card-bg rounded-l">
                        <PokemonCard {...pokemonDetails} />
                    </div>
                    <div className="lg:w-1/4 lg:border lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Attributes</div>
                            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                                {pokemonDetails.stats.map((stats: IStats) => <StatComonent stat={stats.stat} base_stat={stats.base_stat} effort={stats.effort}   />)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-center m-6'> 
                    <Button disabled={false} text="Back" onClick={() => navigate('/')} />
                </div>
            </>
            ) : (
            <div className='mt-12'>
                <Loader />
            </div>)
        }

    </div>
  )
}
