import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import MovieDetails from "./pages/MovieDetails";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/add" element={<AddMovie />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;