import { IPokemonDetails } from '../interfaces/PokemonDetails'
import BadgeContainer from './BadgeContainer'

export default function PokemonCard(pokemonDetails: IPokemonDetails) {

    const {name, sprites} = pokemonDetails

    return (
        <>
        <img className="w-full" src={sprites.front_shiny} alt={`${name} avatar`} />
        <h1 className='text-center font-bold text-card-font-color text-xl capitalize mb-4'>{name}</h1>
        <BadgeContainer {...pokemonDetails} />
        </>
    )
}
