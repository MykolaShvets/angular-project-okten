import {environment} from "../../environments/environment";

export const {API, apiKey, imgAPI} = environment;

export const urls = {
  allGenres: `${API}/genre/movie/list${apiKey}`,
  allMovies: `${API}/discover/movie${apiKey}`,
  singleMovie: `${API}/movie`
}
