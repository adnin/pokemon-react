import { IPokemonTypes } from "./PokemonTypes";

interface IPokemonSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female:  string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface IPokemonDetails {
    name: string;     
    abilities: [];     
    sprites: IPokemonSprites;     
    stats: []; 
    types: IPokemonTypes[]
}