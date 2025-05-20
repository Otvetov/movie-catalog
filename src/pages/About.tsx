import React from "react";
import { Container, Typography, Box, Paper, Link as MuiLink, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GitHubIcon from "@mui/icons-material/GitHub";

const About: React.FC = () => (
  <Container maxWidth="md" sx={{ mt: 6 }}>
    <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
      <Box mb={3}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          О приложении
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          «Каталог Фильмов» — это современное одностраничное приложение для ведения собственной фильмотеки. 
          Вы можете искать фильмы через OMDb API, добавлять свои любимые, а также быстро находить подробную информацию о любом фильме.
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          Возможности:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><MovieIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Хранение своей коллекции фильмов" />
          </ListItem>
          <ListItem>
            <ListItemIcon><SearchIcon color="action" /></ListItemIcon>
            <ListItemText primary="Поиск фильмов онлайн через OMDb API" />
          </ListItem>
          <ListItem>
            <ListItemIcon><AddCircleIcon color="success" /></ListItemIcon>
            <ListItemText primary="Добавление фильмов вручную" />
          </ListItem>
        </List>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          Технологии:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          React, TypeScript, Zustand, Material UI, OMDb API, адаптивная верстка.
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">
          Исходный код опубликован на 
          <MuiLink href="https://github.com/otvetov/movie-catalog" target="_blank" rel="noopener" sx={{ ml: 1 }}>
            <GitHubIcon fontSize="small" sx={{ verticalAlign: 'middle' }} /> GitHub
          </MuiLink>
        </Typography>
      </Box>
    </Paper>
  </Container>
);

export default About;