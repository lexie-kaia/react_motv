import React from 'react';
import { Movie, Tv } from './search_container';
import Main from 'components/main';
import Section from 'components/section';
import Loader from 'components/loader';
import ErrorMessage from 'components/error_message';
import Poster from 'components/poster';

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
    {!isLoading &&
      movieResults &&
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
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                year={movie.release_date.slice(0, 4)}
                rating={movie.vote_average}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="Tv Results">
            {tvResults.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                year={tv.first_air_date.slice(0, 4)}
                rating={tv.vote_average}
                isMovie={false}
              />
            ))}
          </Section>
        )}
      </Main>
    )}
  </>
);

export default SearchPresenter;
