import React from 'react';
import { Movie, Tv } from './search_container';
import Main from 'components/main';
import Section from 'components/section';
import Loader from 'components/loader';
import ErrorMessage from 'components/error_message';

type Props = {
  movieResults: Movie[];
  tvResults: Tv[];
  searchTerm: string;
  isLoading: boolean;
  errorMessage: string;
};

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  isLoading,
  errorMessage,
}: Props) => (
  <>
    {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    {movieResults &&
      tvResults &&
      movieResults.length === 0 &&
      tvResults.length === 0 && (
        <ErrorMessage errorMessage={`No results found for : ${searchTerm}`} />
      )}
    {isLoading ? (
      <Loader />
    ) : (
      <Main>
        {movieResults && movieResults.length > 0 && (
          <Section title="Now Playing">
            {movieResults.map((movie) => (
              <li key={movie.id}>{movie.original_title}</li>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="Popular">
            {tvResults.map((tv) => (
              <li key={tv.id}>{tv.original_name}</li>
            ))}
          </Section>
        )}
      </Main>
    )}
  </>
);

export default SearchPresenter;
