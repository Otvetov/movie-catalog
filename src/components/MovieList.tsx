import React from 'react';
import { Grid } from '@mui/material';
import { Movie } from '../types/movie';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
  onDelete?: (id: string) => void;
  onImport?: (movie: Movie) => void; 
  importedIds?: string[]; 
}

const MovieList: React.FC<MovieListProps> = ({ movies, onDelete, onImport, importedIds }) => (
  <Grid container spacing={2}>
    {movies.map((movie) => (
      <Grid  key={movie.id}>
        <MovieCard
          movie={movie}
          onDelete={onDelete}
          onImport={onImport}
          imported={importedIds?.includes(movie.id)}
        />
      </Grid>
    ))}
  </Grid>
);

export default MovieList;