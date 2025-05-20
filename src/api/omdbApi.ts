import axios from "axios";
import { Movie } from "../types/movie";

const OMDB_API_KEY = "251e317e"; 
const OMDB_URL = "https://www.omdbapi.com/";

export async function searchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get(OMDB_URL, {
    params: {
      apikey: OMDB_API_KEY,
      s: query,
      type: "movie",
    },
  });

  if (response.data.Response === "True") {
    return response.data.Search.map((item: any) => ({
      id: item.imdbID,
      title: item.Title,
      year: item.Year,
      poster: item.Poster !== "N/A" ? item.Poster : "",
    }));
  }
  return [];
}

export async function getMovieById(id: string): Promise<Movie | null> {
  const response = await axios.get(OMDB_URL, {
    params: {
      apikey: OMDB_API_KEY,
      i: id,
      plot: "full",
    },
  });

  if (response.data.Response === "True") {
    return {
      id: response.data.imdbID,
      title: response.data.Title,
      year: response.data.Year,
      poster: response.data.Poster !== "N/A" ? response.data.Poster : "",
      description: response.data.Plot,
    };
  }
  return null;
}