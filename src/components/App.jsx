import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
          <Route path="cast">
            <Cast />
          </Route>
          <Route path="reviews">
            <Reviews />
          </Route>
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
