import axios, { AxiosError, AxiosResponse } from 'axios';

interface Result {
    count: 0;
    next: string;
    previous: string;
    results: [];
}

interface Details {
    name: string;
    abilities: [];
    sprites: {};
    stats: [];
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
  fetchAll: () => request.get<Result>(`pokemon`),
  fetchByName: (name: string) => request.get<Details>(`pokemon/${name}`),
};

const api = {
    pokemon,
};

export default api;