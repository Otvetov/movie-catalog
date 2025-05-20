import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Button color="inherit" component={Link} to="/">Главная</Button>
        <Button color="inherit" component={Link} to="/movies">Фильмы</Button>
        <Button color="inherit" component={Link} to="/add">Добавить</Button>
        <Button color="inherit" component={Link} to="/about">О приложении</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;