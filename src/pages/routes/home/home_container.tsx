import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { movieApi } from 'services/tmdb';
import HomePresenter from './home_presenter';

export type Movie = {
  id: number;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};

export type Movies = {
  nowPlaying: Movie[];
  popular: Movie[];
  upcoming: Movie[];
};

const navList = [
  { name: 'now playing', pathname: '/movies/now_playing' },
  { name: 'popular', pathname: '/movies/popular' },
  { name: 'upcoming', pathname: '/movies/upcoming' },
];

const HomeContainer = () => {
  const [currMovie, setCurrMovie] = useState<Movie>({
    id: 0,
    original_title: '',
    release_date: '',
    vote_average: 0,
    overview: '',
    poster_path: '',
    backdrop_path: '',
  });
  const [movies, setMovies] = useState<Movies>({
    nowPlaying: [],
    popular: [],
    upcoming: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const { pathname } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError('');
        const nowPlaying = await movieApi.getNowPlaying();
        const popular = await movieApi.getPopular();
        const upcoming = await movieApi.getUpcoming();
        setMovies({ nowPlaying, popular, upcoming });
        setCurrMovie(nowPlaying[0]);
      } catch (err) {
        console.error(err);
        setError("Can't find movie information");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <HomePresenter
      nowPlaying={movies.nowPlaying}
      popular={movies.popular}
      upcoming={movies.upcoming}
      currMovie={currMovie}
      loading={loading}
      error={error}
      navList={navList}
      pathname={pathname}
    />
  );
};

export default HomeContainer;
