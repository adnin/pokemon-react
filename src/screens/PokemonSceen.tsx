import { useEffect, useState } from 'react'
import { AppDispatch, useAppDispatch } from '../redux'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPokemonbyId } from '../redux/pokemonReducer';
import CardContentLoader from '../components/CardContentLoader';
import PokemonCard from '../components/PokemonCard';
import { IPokemonDetails } from '../interfaces/PokemonDetails';

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
    <div className='flex justify-center items-center mx-auto bg-home-bg h-screen overflow-x-hidden'>
        {pokemonDetails ? (
            <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
                <div className="h-1/4 lg:h-auto lg:w-1/4 flex-none overflow-hidden bg-card-bg rounded-l">
                    <PokemonCard {...pokemonDetails} />
                </div>
                <div className="lg:w-1/4 lg:border lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">Attributes</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                </div>
            </div>
            ) : (
            <div style={{ width: "100%", border: "1px solid" }}>
                <CardContentLoader viewBox="0 0 400 560" />
            </div>)
        }

    </div>
  )
}
