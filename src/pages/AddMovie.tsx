import React from 'react';
import { useMovieStore } from '../store/movieStore';
import MovieForm from '../components/MovieForm';
import { Container, Typography } from '@mui/material';

const AddMovie: React.FC = () => {
  const { addMovie } = useMovieStore();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Добавить фильм</Typography>
      <MovieForm onAdd={addMovie} />
    </Container>
  );
};

export default AddMovie;