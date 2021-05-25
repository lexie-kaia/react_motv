import React from 'react';
import { Helmet } from 'react-helmet';
import { Movie, Tv } from './search_container';
import Section from 'components/section';
import Loader from 'components/loader';
import Error from 'components/error';
import Poster from 'components/poster';

type Props = {
  movieResults: Movie[];
  tvResults: Tv[];
  searchTerm: string;
  loading: boolean;
  error: string;
};

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
}: Props) => (
  <>
    <Helmet>
      <title>Search | MOTV</title>
    </Helmet>
    {error && <Error error={error} />}
    {!loading &&
      movieResults &&
      tvResults &&
      movieResults.length === 0 &&
      tvResults.length === 0 && (
        <Error error={`No results found for : ${searchTerm}`} />
      )}
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results" isPoster={true}>
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                year={movie.release_date?.slice(0, 4)}
                score={movie.vote_average}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="Tv Results" isPoster={true}>
            {tvResults.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                year={tv.first_air_date?.slice(0, 4)}
                score={tv.vote_average}
                isMovie={false}
              />
            ))}
          </Section>
        )}
      </>
    )}
  </>
);

export default SearchPresenter;
