import { create } from 'zustand';
import { Movie } from '../types/movie';

interface MovieStore {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (id: string) => void;
  setMovies: (movies: Movie[]) => void;
}

const initialMovies: Movie[] = [
  {
    id: 'tt0111161',
    title: 'Побег из Шоушенка',
    year: '1994',
    poster: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY445_.jpg',
    description: 'История о надежде, дружбе и свободе.',
  },
  {
    id: 'tt0068646',
    title: 'Крестный отец',
    year: '1972',
    poster: 'https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_SY445_.jpg',
    description: 'Сага о мафиозной семье Корлеоне.',
  },
];

export const useMovieStore = create<MovieStore>((set) => ({
  movies: initialMovies,
  addMovie: (movie) =>
    set((state) => ({ movies: [...state.movies, movie] })),
  removeMovie: (id) =>
    set((state) => ({ movies: state.movies.filter((m) => m.id !== id) })),
  setMovies: (movies) => set({ movies }),
}));