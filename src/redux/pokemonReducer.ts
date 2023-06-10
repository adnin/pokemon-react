import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api, { IFetchAllParam } from '../api/api';
import { IPokemonState, IResult } from '../interfaces/PokemonState';

export const fetchAllPokemon = createAsyncThunk(
  'pokemon/fetchAll',
  async (params: IFetchAllParam, thunkAPI) => {
    try {
      const response = await api.pokemon.fetchAll(params);
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

export const fetchByPaginationPokemon = createAsyncThunk(
  'pokemon/fetchByPagination',
  async (url: string, thunkAPI) => {
    try {
      const response = await api.pokemon.fetchByPagination(url);
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

export const fetchPokemonbyId = createAsyncThunk(
  'pokemon/fetchbyId',
  async (id: number, thunkAPI) => {
    try {
      const response = await api.pokemon.fetchById(id);
      const data = await response;
      if (!data.name) {
        return false;
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch issues.");
    }
  }
);

const initialState: IPokemonState = {
  result: {
    count: 0,
    next: '',
    previous: '',
    results: []
  },
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
        state.result = action.payload  as IResult;
      })
      .addCase(fetchAllPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });

      builder
      .addCase(fetchByPaginationPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchByPaginationPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload  as IResult;
      })
      .addCase(fetchByPaginationPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default pokemonSlice.reducer;
