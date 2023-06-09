import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "../redux/index";
import { fetchAllPokemon } from "../redux/pokemonReducer";

const HomeScreen = () => {

    const dispatch: AppDispatch = useAppDispatch();
    const pokemons = useSelector((state: RootState) => state.pokemon.result)
    const loading = useSelector((state: RootState) => state.pokemon.loading);
    const error = useSelector((state: RootState) => state.pokemon.error);

    useEffect(() => {
        dispatch(fetchAllPokemon())
      }, [dispatch]);
    
      useEffect(() => {
        console.log(pokemons)
      }, [pokemons])
    
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

    return(
        <div className="container flex items-center">
            Home Page
        </div>
    )
}

export default HomeScreen;
