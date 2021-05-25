import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { movieApi, tvApi } from 'services/tmdb';
import DetailPresenter from './details_presenter';

export type Details = {
  id: number;
  title: string;
  score: number;
  year: string;
  runtime: number;
  genres: { id: number; name: string }[];
  countries: { iso_3166_1: string; name: string }[];
  companies: { id: number; name: string }[];
  overview: string;
  imdb: string;
  posterUrl: string;
  backdropUrl: string;
  videos?: { id: string; key: string; name: string; type: string }[];
  images?: { file_path: string }[];
  seasons?: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    poster_path: string;
  }[];
};

export type NavList = {
  name: string;
  pathname: string;
}[];

const DetailContainer = () => {
  const history = useHistory();
  const { id: paramId } = useParams<{ id: string }>();
  const { pathname } = useLocation();

  const [details, setDetails] = useState<Details>({
    id: 0,
    title: '',
    score: 0,
    year: '',
    runtime: 0,
    genres: [],
    countries: [],
    companies: [],
    overview: '',
    imdb: '',
    posterUrl: '',
    backdropUrl: '',
  });
  const [isMovie, setIsMovie] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [navList, setNavList] = useState<NavList>([]);

  useEffect(() => {
    (async () => {
      const id = Number(paramId);
      if (isNaN(id)) return history.push('/');
      let response = null;
      try {
        if (pathname.includes('/movie/')) {
          response = await movieApi.getDetails(id);
          setIsMovie(true);
          setNavList([
            { name: 'images', pathname: `/movie/${id}` },
            { name: 'videos', pathname: `/movie/${id}/videos` },
          ]);
        } else if (pathname.includes('/tv/')) {
          response = await tvApi.getDetails(id);
          setIsMovie(false);
          setNavList([
            { name: 'images', pathname: `/tv/${id}` },
            { name: 'videos', pathname: `/tv/${id}/videos` },
            { name: 'seasons', pathname: `/tv/${id}/seasons` },
          ]);
        }
        setDetails({
          id: response.id,
          title: isMovie ? response.original_title : response.original_name,
          score: response.vote_average,
          year: isMovie
            ? response.release_date?.slice(0, 4)
            : response.first_air_date?.slice(0, 4),
          runtime: response.runtime,
          genres: response.genres,
          countries: response.production_countries,
          companies: response.production_companies,
          overview: response.overview,
          imdb: response.imdb_id,
          posterUrl: response.poster_path,
          backdropUrl: response.backdrop_path,
          videos: response.videos?.results,
          images: response.images?.backdrops,
          seasons: response.seasons,
        });
      } catch (err) {
        console.error(err);
        setError("Can't find anything");
      } finally {
        setLoading(false);
      }
    })();
  }, [paramId, history, pathname, isMovie]);

  return (
    <DetailPresenter
      details={details}
      loading={loading}
      error={error}
      isMovie={isMovie}
      navList={navList}
      pathname={pathname}
    />
  );
};

export default DetailContainer;
