import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import pokemonReducer from "./pokemonReducer";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
