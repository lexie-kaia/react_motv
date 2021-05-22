import React from 'react';
import { Tv } from './tv_container';
import Main from 'components/main';
import Section from 'components/section';
import Loader from 'components/loader';
import ErrorMessage from 'components/error_message';
import Poster from 'components/poster';

type Props = {
  airingToday: Tv[];
  popular: Tv[];
  topRated: Tv[];
  isLoading: boolean;
  errorMessage: string;
};

const TvPresenter = ({
  airingToday,
  popular,
  topRated,
  isLoading,
  errorMessage,
}: Props) => (
  <>
    {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    {isLoading ? (
      <Loader />
    ) : (
      <Main>
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map((tv) => (
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
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map((tv) => (
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
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated">
            {topRated.map((tv) => (
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

export default TvPresenter;
