import axios, { AxiosError, AxiosResponse } from 'axios';
import { IPokemonDetails } from '../interfaces/PokemonDetails';
interface Result {
    count: 0;
    next: string;
    previous: string;
    results: [];
}

export interface IFetchAllParam {
    offset: number;
    limit: number;
}

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

axios.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;

      case 401:
        console.error('unauthorised');
        break;

      case 404:
        console.error('/not-found');
        break;

      case 500:
        console.error('/server-error');
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

const pokemon = {
  fetchAll: ({offset, limit}: IFetchAllParam) => request.get<Result>(`pokemon?offset=${offset}&limit=${limit}`),
  fetchById: (id: number) => request.get<IPokemonDetails>(`pokemon/${id}`),
};

const api = {
    pokemon,
};

export default api;