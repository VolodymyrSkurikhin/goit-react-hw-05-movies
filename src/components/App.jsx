import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Pages/Home/Home';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import Movies from './Pages/Movies/Movies';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // flexDirection:'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<Home />} />
        <Route element={<Home />} />
      </Routes>
    </div>
  );
};
