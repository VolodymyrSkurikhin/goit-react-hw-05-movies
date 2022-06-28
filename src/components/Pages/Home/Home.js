import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import s from './Home.module.css';
import * as LoadData from '../../LoadData';
import MovieList from 'components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState(null);
  // const location = useLocation();
  // const pathThumb = location.path.includes('movies') ? '' : 'movies';
  // const { url } = useRouteMatch();
  useEffect(() => {
    LoadData.fetchTrendMovies().then(res => setMovies(res.results));
  }, []);
  console.log(movies);
  return (
    movies && (
      <>
        <h2 className={s.title}>Trending today</h2>
        <MovieList moviesData={movies} />
      </>
    )
    // <>
    //   <h2 className={s.title}>Trending today</h2>
    //   {movies && (
    //     <ul>
    //       {movies.map(movie => (
    //         <li key={movie.id}>
    //           <Link className={s.listLink} to={`movies/${movie.id}`}>
    //             {movie.title}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </>
  );
}
