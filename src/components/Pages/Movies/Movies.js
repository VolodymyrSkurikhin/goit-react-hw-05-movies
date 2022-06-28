import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import * as LoadData from '../../LoadData.js';
import { useSearchParams } from 'react-router-dom';
import s from './Movies.module.css';

export default function Movies() {
  const [searchParam, setSearchParam] = useSearchParams();
  let currentSearch = searchParam.get('query') ?? '';
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (currentSearch === '') {
      return;
    }

    LoadData.fetchOnSearch(currentSearch).then(res => setMovies(res.results));
  }, [currentSearch]);
  function onButtonSubmit(e) {
    e.preventDefault();
    console.dir(e.currentTarget);
    if (e.currentTarget.elements.searchInput.value === '') {
      alert('Enter search, please!');
      return;
    }
    setSearchParam({
      query: e.currentTarget.elements.searchInput.value,
    });
    e.currentTarget.reset();
    // LoadData.fetchOnSearch(search).then(res => setMovies(res.results));
  }
  function onChangeInput(e) {
    setSearch(e.target.value.trim());
  }
  return (
    <>
      <form className={s.form} onSubmit={onButtonSubmit}>
        <input
          name="searchInput"
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
