import axios from 'axios';
import type { Movie } from '../types/movie';

interface MoviesResponse {
  results: Movie[];
}

const url = 'https://api.themoviedb.org/3/search/movie';

export async function searchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<MoviesResponse>(url, {
    params: { query },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  });
  return response.data.results;
}
