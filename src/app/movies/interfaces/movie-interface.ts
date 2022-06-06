import {IMovieGenre} from "./movie-genre-interface";

export interface IMovie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection?: null | object;
  budget?: number;
  genre_ids?: number[];
  genres?: IMovieGenre[];
  homepage?: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies?: IMovieProdComp[];
  release_date: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: IMovieLang[];
  status?: string;
  tagline?: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export interface IMovieLang {
  iso_639_1: string;
  name: string;
}

export interface IMovieProdComp {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}


export interface IMovieProdCountries {
  iso_3166_1: string;
  name: string;
}
