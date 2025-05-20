import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMovieStore } from '../store/movieStore';
import { Container, Typography, Card, CardMedia, CardContent, Button, Box, CircularProgress } from '@mui/material';
import { getMovieById } from '../api/omdbApi';
import { Movie } from '../types/movie';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { movies, removeMovie } = useMovieStore();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localMovie = movies.find((m) => m.id === id);
    if (localMovie) {
      setMovie(localMovie);
      setLoading(false);
    } else if (id) {
      // Загрузить из OMDb, если нет локально
      getMovieById(id).then((omdbMovie) => {
        setMovie(omdbMovie);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id, movies]);

  const handleDelete = () => {
    if (movie) {
      removeMovie(movie.id);
      navigate('/movies');
    }
  };

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" color="error">Фильм не найден</Typography>
        <Button component={Link} to="/movies" sx={{ mt: 2 }}>Назад к списку</Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={movie.poster}
          alt={movie.title}
        />
<CardContent>
  <Typography variant="h4" gutterBottom>{movie.title} ({movie.year})</Typography>
  {movie.runtime && (
    <Typography variant="body1" color="text.secondary" gutterBottom>
      Время: {movie.runtime}
    </Typography>
  )}
  <Typography variant="body1" paragraph>
    {movie.description || 'Нет описания.'}
  </Typography>
</CardContent>
        <Box sx={{ p: 2 }}>
          <Button component={Link} to="/movies" sx={{ mr: 2 }}>Назад</Button>
          
          {movies.find((m) => m.id === movie.id) && (
            <Button variant="contained" color="error" onClick={handleDelete}>Удалить</Button>
          )}
        </Box>
      </Card>
    </Container>
  );
};

export default MovieDetails;