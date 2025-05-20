import React from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <Container maxWidth="md" sx={{ mt: 6 }}>
    <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Каталог Фильмов
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Ваш личный онлайн-менеджер любимых фильмов
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Добавляйте, ищите, храните и делитесь впечатлениями о фильмах в одном месте.<br />
          Используйте поиск по базе OMDb или собирайте свою персональную коллекцию!
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center" mb={4}>
        <Grid>
          <Button variant="contained" color="primary" size="large" component={Link} to="/movies">
            Перейти к фильмам
          </Button>
        </Grid>
        <Grid>
          <Button variant="outlined" color="secondary" size="large" component={Link} to="/add">
            Добавить фильм
          </Button>
        </Grid>
      </Grid>
      <Box textAlign="center" mt={2}>
        <Typography variant="body2" color="text.secondary">
          Узнайте больше <Link to="/about">о приложении</Link>
        </Typography>
      </Box>
    </Paper>
  </Container>
);

export default Home;