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
  const { term: paramTerm } = useParams<{ term: string }>();
  const [results, setResults] = useState<Results>({
    movieResults: [],
    tvResults: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const searchByTerm = async (term: string) => {
    try {
      setLoading(true);
      setError('');
      const movieResults = await movieApi.search(paramTerm);
      const tvResults = await tvApi.search(paramTerm);
      setResults({
        movieResults,
        tvResults,
      });
    } catch (err) {
      console.error(err);
      setError("Can't find results");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchByTerm(paramTerm);
  }, [paramTerm]);

  return (
    <SearchPresenter
      movieResults={results.movieResults}
      tvResults={results.tvResults}
      searchTerm={paramTerm}
      loading={loading}
      error={error}
    />
  );
};

export default SearchContainer;
