import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Movie } from '../types/movie';
import { v4 as uuidv4 } from 'uuid';

interface MovieFormProps {
  onAdd: (movie: Movie) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !year || !poster) return;
    onAdd({
      id: uuidv4(),
      title,
      year,
      poster,
      description,
    });
    setTitle('');
    setYear('');
    setPoster('');
    setDescription('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
      <TextField label="Название" value={title} onChange={e => setTitle(e.target.value)} fullWidth margin="normal" required />
      <TextField label="Год" value={year} onChange={e => setYear(e.target.value)} fullWidth margin="normal" required />
      <TextField label="Постер (URL)" value={poster} onChange={e => setPoster(e.target.value)} fullWidth margin="normal" required />
      <TextField label="Описание" value={description} onChange={e => setDescription(e.target.value)} fullWidth margin="normal" multiline rows={3} />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Добавить фильм
      </Button>
    </Box>
  );
};

export default MovieForm;