import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { tvApi } from 'services/tmdb';
import TvPresenter from './tv_presenter';

export type Tv = {
  id: number;
  original_name: string;
  first_air_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};

export type Tvs = {
  airingToday: Tv[];
  popular: Tv[];
  topRated: Tv[];
};

const navList = [
  {
    name: 'airing today',
    pathname: '/tvs/airing_today',
  },
  { name: 'popular', pathname: '/tvs/popular' },
  { name: 'top rated', pathname: '/tvs/top_rated' },
];

const TvContainer = () => {
  const [currTv, setCurrTv] = useState<Tv>({
    id: 0,
    original_name: '',
    first_air_date: '',
    vote_average: 0,
    overview: '',
    poster_path: '',
    backdrop_path: '',
  });
  const [tvs, setTvs] = useState<Tvs>({
    airingToday: [],
    popular: [],
    topRated: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const { pathname } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError('');
        const airingToday = await tvApi.getAiringToday();
        const popular = await tvApi.getPopular();
        const topRated = await tvApi.getTopRated();
        setTvs({
          airingToday,
          popular,
          topRated,
        });
        setCurrTv(airingToday[0]);
      } catch (err) {
        console.error(err);
        setError("Can't find tv information");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <TvPresenter
      airingToday={tvs.airingToday}
      popular={tvs.popular}
      topRated={tvs.topRated}
      currTv={currTv}
      loading={loading}
      error={error}
      navList={navList}
      pathname={pathname}
    />
  );
};

export default TvContainer;
