import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <Box component="form" onSubmit={handleSearch} sx={{ display: "flex", gap: 2, mb: 3 }}>
      <TextField
        label="Поиск фильмов"
        value={query}
        onChange={e => setQuery(e.target.value)}
        variant="outlined"
        size="small"
      />
      <Button type="submit" variant="contained">Найти</Button>
    </Box>
  );
};

export default SearchBar;