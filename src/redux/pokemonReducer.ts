import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/api';

export const fetchAllPokemon = createAsyncThunk(
  'pokemon/fetchAllPokemon',
  async (_, thunkAPI) => {
    try {
      const response = await api.pokemon.fetchAll();
      const data = await response;
      if (!data.count) {
        return false;
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch issues.");
    }
  }
);


interface PokemonState {
  result: {};
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  result: {},
  loading: false,
  error: null,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addCase(fetchAllPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default pokemonSlice.reducer;
