import React from 'react';
import { Movie } from './home_container';
import Main from 'components/main';
import Section from 'components/section';
import Loader from 'components/loader';
import ErrorMessage from 'components/error_message';
import Poster from 'components/poster';

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
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map((movie) => (
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
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming">
            {upcoming.map((movie) => (
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
      </Main>
    )}
  </>
);

export default HomePresenter;
