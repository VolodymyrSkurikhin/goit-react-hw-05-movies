import React from 'react';
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

export default function MovieList({ moviesData }) {
  return (
    <ul>
      {moviesData.map(movie => (
        <li key={movie.id}>
          <Link className={s.listLink} to={`movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
