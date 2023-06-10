import { IPokemonDetails } from "../interfaces/PokemonDetails";
import { IPokemonTypes } from "../interfaces/PokemonTypes";
import PokemonBadge from "./PokemonBadge";

export default function BadgeContainer({types}: IPokemonDetails) {
    
  return (
    <div className='bg-card-name-bg p-2'>
        <div className="grid grid-cols-3 gap-2">
            {types.map((pokemonTypes: IPokemonTypes) => (
                <PokemonBadge key={pokemonTypes.type.name} slot={pokemonTypes.slot} type={pokemonTypes.type} />
            ))}
        </div>
    </div>
  )
}
