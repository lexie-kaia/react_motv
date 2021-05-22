import React, { useState, useEffect } from 'react';
import { tvApi } from 'services/tmdb';
import TvPresenter from './tv_presenter';

export type Tv = {
  id: number;
  original_name: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
};

export type Tvs = {
  airingToday: Tv[];
  popular: Tv[];
  topRated: Tv[];
};

const TvContainer = () => {
  const [tvs, setTvs] = useState<Tvs>({
    airingToday: [],
    popular: [],
    topRated: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const airingToday = await tvApi.getAiringToday();
        const popular = await tvApi.getPopular();
        const topRated = await tvApi.getTopRated();
        setTvs({
          airingToday,
          popular,
          topRated,
        });
      } catch (error) {
        console.error(error);
        setErrorMessage("Can't find tv information");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <TvPresenter
      airingToday={tvs.airingToday}
      popular={tvs.popular}
      topRated={tvs.topRated}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};

export default TvContainer;
