import React, { useEffect } from 'react';
import { useState } from 'react';
import * as LoadData from '../LoadData';
import s from './Reviews.module.css';
import PropTypes from 'prop-types';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    LoadData.fetchReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);
  if (reviews && reviews.length === 0) {
    return <p className={s.content}>We don't haveany reviews for this movie</p>;
  }
  return (
    reviews && (
      <ul>
        {reviews.map(entry => (
          <li key={entry.id}>
            <h3 className={s.author}>{`Author: ${entry.author}`}</h3>
            <p className={s.content}>{entry.content}</p>
          </li>
        ))}
        ;
      </ul>
    )
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};
