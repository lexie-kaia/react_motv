import React from 'react';
import { Movie } from './home_container';
import Main from 'components/main';
import Section from 'components/section';
import Loader from 'components/loader';
import ErrorMessage from 'components/error_message';

type Props = {
  nowPlaying: Movie[];
  popular: Movie[];
  upcoming: Movie[];
  isLoading: boolean;
  errorMessage: string;
};

const HomePresenter = ({
  nowPlaying,
  popular,
  upcoming,
  isLoading,
  errorMessage,
}: Props) => (
  <>
    {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    {isLoading ? (
      <Loader />
    ) : (
      <Main>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map((movie) => (
              <li key={movie.id}>{movie.original_title}</li>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map((movie) => (
              <li key={movie.id}>{movie.original_title}</li>
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming">
            {upcoming.map((movie) => (
              <li key={movie.id}>{movie.original_title}</li>
            ))}
          </Section>
        )}
      </Main>
    )}
  </>
);

export default HomePresenter;
