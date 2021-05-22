import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { movieApi, tvApi } from 'services/tmdb';
import SearchPresenter from './search_presenter';

export type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export type Tv = {
  id: number;
  original_name: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
};

export type Results = {
  movieResults: Movie[];
  tvResults: Tv[];
};

const SearchContainer = () => {
  const { term: searchTerm } = useParams<{ term: string }>();
  const [results, setResults] = useState<Results>({
    movieResults: [],
    tvResults: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const searchByTerm = async (term: string) => {
    try {
      const movieResults = await movieApi.search(searchTerm);
      const tvResults = await tvApi.search(searchTerm);
      setResults({
        movieResults,
        tvResults,
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Can't find results");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchByTerm(searchTerm);
  }, [searchTerm]);

  return (
    <SearchPresenter
      movieResults={results.movieResults}
      tvResults={results.tvResults}
      searchTerm={searchTerm}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};

export default SearchContainer;
