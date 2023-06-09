
interface PokemonSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female:  string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface PokemonDetails {
    name: string;     
    abilities: [];     
    sprites: PokemonSprites;     
    stats: []; 
    types: []
}