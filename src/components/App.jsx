import { React, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
// import Home from './Pages/Home/Home';
// import MovieDetails from './Pages/MovieDetails/MovieDetails';
// import Movies from './Pages/Movies/Movies';

const Home = lazy(() =>
  import('./Pages/Home/Home' /* webpackChunkname: "Home" */)
);
const MovieDetails = lazy(() =>
  import(
    './Pages/MovieDetails/MovieDetails' /* webpackChunkname: "MovieDetails" */
  )
);
const Movies = lazy(() =>
  import('./Pages/Movies/Movies' /* webpackChunkname: "Movies" */)
);

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
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/" element={<Home />} />
          <Route element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
