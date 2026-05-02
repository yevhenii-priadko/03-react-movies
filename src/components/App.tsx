import SearchBar from './SearchBar/SearchBar';
import MovieGrid from './MovieGrid/MovieGrid';
import { useState } from 'react';
import type { Movie } from '../types/movie';
import { searchMovies } from '../services/movieService';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string): Promise<void> => {
    const result = await searchMovies(query);
    setMovies(result);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} />
    </>
  );
}

export default App;
