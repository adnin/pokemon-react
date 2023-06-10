interface IPokemonType {
    name: string;
    url: string;
}

export interface IPokemonTypes {
    slot: number;
    type: IPokemonType;
}