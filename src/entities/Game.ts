import { Genre } from './Genre';
import { Platform } from './Platform';
import { Publisher } from './Publisher';

export type Game = {
  id: number;
  name: string;
  name_original: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  genres: Genre[];
  publishers: Publisher[];
};
