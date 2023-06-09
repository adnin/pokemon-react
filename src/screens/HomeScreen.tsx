import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "../redux/index";
import { fetchAllPokemon } from "../redux/pokemonReducer";
import PokemonCard from "../components/PokemonCard";

const HomeScreen = () => {

    const [pokemons, setPokemons] = useState([])
    const dispatch: AppDispatch = useAppDispatch();
    const result = useSelector((state: RootState) => state.pokemon.result)
    const loading = useSelector((state: RootState) => state.pokemon.loading);
    const error = useSelector((state: RootState) => state.pokemon.error);

    useEffect(() => {
        dispatch(fetchAllPokemon())
      }, [dispatch]);
    
      useEffect(() => {
        setPokemons(result.results)
      }, [result])
    
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

    return(
        <div className="container p-6">
            <div className="grid grid-cols-4 gap-3">
              {pokemons.map(({name, url}, i) => (
                <PokemonCard
                  key={i}
                  name={name}
                  url={url}
                />
              ))}
            </div>
        </div>
    )
}

export default HomeScreen;
