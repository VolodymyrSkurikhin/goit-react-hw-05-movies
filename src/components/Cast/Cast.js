import React, { useEffect } from 'react';
import { useState } from 'react';
import * as LoadData from '../LoadData';
import s from './Cast.module.css';
import PropTypes from 'prop-types';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    LoadData.fetchCast(movieId).then(res => setCast(res.cast));
  }, [movieId]);
  return (
    cast && (
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <p className={s.sectionText}>{actor.name}</p>
            <p className={s.sectionText}>{actor.character}</p>
          </li>
        ))}
      </ul>
    )
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
