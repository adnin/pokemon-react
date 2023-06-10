import React, { useState, useEffect, FormEvent } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch, RootState, AppDispatch } from "../redux/index";
import { fetchAllPokemon } from "../redux/pokemonReducer";
import PokemonContainer from "../components/PokemonContainer";
import Pagination from "../components/Pagination";
import { addTextChangeDebounce } from "../utilities/Debounce";
import { IFetchAllParam } from "../api/api";

const HomeScreen = () => {
    const [col, setCol] = useState('grid-cols-6')
    const [pokemons, setPokemons] = useState([])
    const [params, setParams] = useState<IFetchAllParam>({offset: 0, limit: 24})
    const dispatch: AppDispatch = useAppDispatch();
    const result = useSelector((state: RootState) => state.pokemon.result)
    const loading = useSelector((state: RootState) => state.pokemon.loading);
    const error = useSelector((state: RootState) => state.pokemon.error);

    const [isLoaded, setIsloaded] = useState(false)

    const updateLimitHander = (event: FormEvent) => {
      const parseValue = parseInt((event.target as HTMLInputElement).value)
      if (parseValue == params.limit) {
        return
      }
      
      setParams({offset: 0, limit: parseValue})
    }

    useEffect(() => {
      dispatch(fetchAllPokemon(params))
    }, [dispatch]);
    
    useEffect(() => {
      setPokemons(result.results)
    }, [result])

    useEffect(() => {
      if (!isLoaded) {
        return
      }
      
      addTextChangeDebounce(() => dispatch(fetchAllPokemon(params)))
    }, [params, dispatch])

    useEffect(() => {
      setIsloaded(true)
    }, [])
    
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

    return(
        <div className="container p-6 bg-home-bg">
            <div className={`grid ${col} gap-2`}>
              {pokemons.map(({name, url}, i) => (
                <PokemonContainer
                  key={i}
                  name={name}
                  url={url}
                />
              ))}
            </div>
            <Pagination limit={params.limit} updateLimit={updateLimitHander} />
        </div>
    )
}

export default HomeScreen;
