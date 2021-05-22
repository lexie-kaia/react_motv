import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { movieApi, tvApi } from 'services/tmdb';
import DetailPresenter from './details_presenter';

export type Details = {
  id: number;
  original_title?: string;
  original_name?: string;
  release_date?: string;
  first_air_date?: string;
  runtime: number;
  genres: { id: number; name: string }[];
  overview: string;
  poster_path: string;
  backdrop_path: string;
  videos?: {
    results: { id: string; key: string; name: string }[];
  };
};

const DetailContainer = () => {
  const history = useHistory();
  const { id: paramId } = useParams<{ id: string }>();
  const { pathname } = useLocation();

  const [details, setDetails] = useState<Details | null>(null);
  const [isMovie, setIsMovie] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      const id = Number(paramId);
      if (isNaN(id)) return history.push('/');
      let response = null;
      try {
        if (pathname.includes('/movie/')) {
          response = await movieApi.getDetails(id);
          setIsMovie(true);
        } else if (pathname.includes('/tv/')) {
          response = await tvApi.getDetails(id);
          setIsMovie(false);
        }
        setDetails(response);
      } catch (err) {
        console.error(err);
        setError("Can't find anything");
      } finally {
        setLoading(false);
      }
    })();
  }, [paramId, history, pathname]);

  return (
    <DetailPresenter
      title={isMovie ? details?.original_title : details?.original_name}
      year={
        isMovie
          ? details?.release_date?.slice(0, 4)
          : details?.first_air_date?.slice(0, 4)
      }
      runtime={details?.runtime}
      genres={details?.genres}
      overview={details?.overview}
      poster_path={details?.poster_path}
      backdrop_path={details?.backdrop_path}
      videos={details?.videos?.results}
      loading={loading}
      error={error}
      isMovie={isMovie}
    />
  );
};

export default DetailContainer;
