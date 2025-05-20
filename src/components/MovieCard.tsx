import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  onDelete?: (id: string) => void;
  onImport?: (movie: Movie) => void;
  imported?: boolean;
}

const CARD_HEIGHT = 460;
const POSTER_HEIGHT = 300;

const MovieCard: React.FC<MovieCardProps> = ({ movie, onDelete, onImport, imported }) => (
  <Card sx={{ height: CARD_HEIGHT, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <Box>
      <CardMedia
        component="img"
        image={movie.poster || 'https://via.placeholder.com/300x450?text=No+Image'}
        alt={movie.title}
        sx={{
          height: POSTER_HEIGHT,
          objectFit: 'cover',
          backgroundColor: '#eee',
        }}
      />
      <CardContent sx={{ minHeight: 80 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {movie.title} ({movie.year})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {typeof movie.description === "string"
            ? movie.description.slice(0, 60) + "..."
            : ""}
        </Typography>
      </CardContent>
    </Box>
    <CardActions sx={{ mt: 'auto' }}>
      <Button component={Link} to={`/movies/${movie.id}`} size="small">Подробнее</Button>
      {onDelete && (
        <Button color="error" size="small" onClick={() => onDelete(movie.id)}>
          Удалить
        </Button>
      )}
      {onImport && (
        <Button
          color="primary"
          size="small"
          onClick={() => onImport(movie)}
          disabled={imported}
        >
          {imported ? "В коллекции" : "Импортировать"}
        </Button>
      )}
    </CardActions>
  </Card>
);

export default MovieCard;