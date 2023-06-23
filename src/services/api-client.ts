import axios, { AxiosRequestConfig } from 'axios';
import { Game } from '../entities/Game';
import { Genre } from '../entities/Genre';
import { Platform } from '../entities/Platform';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {},
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

const genreClient = new APIClient<Genre>('/genres');
const platformClient = new APIClient<Platform>('/platforms/lists/parents');
const gameClient = new APIClient<Game>('/games');

export { gameClient, genreClient, platformClient };
