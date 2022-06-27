import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import * as LoadData from '../../LoadData.js';
// import { useRouteMatch } from 'react-router-dom';
import s from './Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');
  // const { url } = useRouteMatch();
  function onButtonSubmit(e) {
    e.preventDefault();
    LoadData.fetchOnSearch(search).then(res => setMovies(res.results));
  }
  function onChangeInput(e) {
    setSearch(e.currentTarget.value);
  }
  return (
    <>
      <form className={s.form} onSubmit={onButtonSubmit}>
        <input
          value={search}
          type="text"
          className={s.input}
          onChange={onChangeInput}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      {movies && <MovieList moviesData={movies} />}
    </>
  );
}
