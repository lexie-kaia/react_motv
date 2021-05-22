import React, { useState, useEffect } from 'react';
import { movieApi } from 'services/tmdb';
import HomePresenter from './home_presenter';

export type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export type Movies = {
  nowPlaying: Movie[];
  popular: Movie[];
  upcoming: Movie[];
};

const HomeContainer = () => {
  const [movies, setMovies] = useState<Movies>({
    nowPlaying: [],
    popular: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const getMovies = async () => {
    try {
      const nowPlaying = await movieApi.getNowPlaying();
      const popular = await movieApi.getPopular();
      const upcoming = await movieApi.getUpcoming();
      setMovies({
        nowPlaying,
        popular,
        upcoming,
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Can't find movie information");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <HomePresenter
      nowPlaying={movies.nowPlaying}
      popular={movies.popular}
      upcoming={movies.upcoming}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};

export default HomeContainer;
