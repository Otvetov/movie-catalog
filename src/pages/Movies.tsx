import React, { useState } from 'react';
import { useMovieStore } from '../store/movieStore';
import MovieList from '../components/MovieList';
import { Typography, Container, Tabs, Tab, Box, CircularProgress, Snackbar, Alert } from '@mui/material';
import SearchBar from '../components/SearchBar';
import { searchMovies, getMovieById } from '../api/omdbApi';
import { Movie } from '../types/movie';

const Movies: React.FC = () => {
  const { movies, removeMovie, addMovie } = useMovieStore();
  const [tab, setTab] = useState(0);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{open: boolean, text: string}>({open: false, text: ""});

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => setTab(newValue);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const results = await searchMovies(query);
    setSearchResults(results);
    setLoading(false);
  };

  // Проверка: уже импортирован ли фильм
  const importedIds = movies.map(m => m.id);

  const handleImport = async (movie: Movie) => {
    // Получить полную информацию о фильме (plot)
    const fullMovie = await getMovieById(movie.id);
    if (fullMovie) {
      addMovie(fullMovie);
      setSnackbar({open: true, text: "Фильм добавлен в ваши фильмы!"});
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Каталог фильмов</Typography>
      <Box sx={{ mb: 2 }}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Мои фильмы" />
          <Tab label="Поиск (OMDb)" />
        </Tabs>
      </Box>
      {tab === 0 && <MovieList movies={movies} onDelete={removeMovie} />}
      {tab === 1 && (
        <>
          <SearchBar onSearch={handleSearch} />
          {loading ? (
            <CircularProgress />
          ) : (
            <MovieList movies={searchResults} onImport={handleImport} importedIds={importedIds} />
          )}
          <Snackbar
            open={snackbar.open}
            autoHideDuration={2000}
            onClose={() => setSnackbar({open: false, text: ""})}
          >
            <Alert severity="success">{snackbar.text}</Alert>
          </Snackbar>
        </>
      )}
    </Container>
  );
};

export default Movies;