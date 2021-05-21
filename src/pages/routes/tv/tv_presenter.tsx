import React from 'react';
import { Tv } from './tv_container';
import Main from 'components/main';
import Section from 'components/section';
import Loader from 'components/loader';
import ErrorMessage from 'components/error_message';

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
              <li key={tv.id}>{tv.original_name}</li>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map((tv) => (
              <li key={tv.id}>{tv.original_name}</li>
            ))}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated">
            {topRated.map((tv) => (
              <li key={tv.id}>{tv.original_name}</li>
            ))}
          </Section>
        )}
      </Main>
    )}
  </>
);

export default TvPresenter;
