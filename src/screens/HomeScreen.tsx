import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch, RootState, AppDispatch } from "../redux/index";
import { fetchAllPokemon, fetchByPaginationPokemon } from "../redux/pokemonReducer";
import PokemonContainer from "../components/PokemonContainer";
import Pagination from "../components/Pagination";
import { addTextChangeDebounce } from "../utilities/Debounce";
import { IFetchAllParam } from "../api/api";
import Loader from "../components/Loader";

const HomeScreen = () => {
  
    const [col, setCol] = useState('grid-cols-6')
    const [params, setParams] = useState<IFetchAllParam>({offset: 0, limit: 24})
    const dispatch: AppDispatch = useAppDispatch();
    const result = useSelector((state: RootState) => state.pokemon.result)
    const loading = useSelector((state: RootState) => state.pokemon.loading);
    const error = useSelector((state: RootState) => state.pokemon.error);

    const [isLoaded, setIsloaded] = useState(false)

    const updateParamsHandler = (params: IFetchAllParam) => {
      setParams(params)
    }

    const updatePageHandler = (type: string) => {
      let url = result.previous;
      if (type === 'Next') {
        url = result.next
      }
      addTextChangeDebounce(() => dispatch(fetchByPaginationPokemon(url)))
    }

    useEffect(() => {
      dispatch(fetchAllPokemon(params))
    }, [dispatch]);

    useEffect(() => {
      if (!isLoaded) {
        return
      }
      
      addTextChangeDebounce(() => dispatch(fetchAllPokemon(params)))
    }, [params, dispatch])

    useEffect(() => {
      setIsloaded(true)
    }, [])
  
    if (error) {
      return <div>Error: {error}</div>;
    }

    return(
        <div className="bg-home-bg p-4 flex flex-col h-full min-h-screen">
            <div className="item-center justify-center">
                <img 
                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
                className="object-cover h-42 w-128 m-auto" />
            </div>
            <Pagination 
                  result={result} 
                  params={params} 
                  updateParams={updateParamsHandler} 
                  updatePage={updatePageHandler} />
            {loading && <Loader />}
            {!loading && result && 
              <>
                <div className={`grid ${col} gap-2 content-evenly`}>
                  {result.results.map(({name, url}) => (
                    <PokemonContainer
                      key={name}
                      name={name}
                      url={url}
                    />
                  ))}
                </div>
              </>
            }
            {!loading && <Pagination 
              result={result} 
              params={params} 
              updateParams={updateParamsHandler} 
              updatePage={updatePageHandler} />  }        
        </div>
    )
}

export default HomeScreen;
