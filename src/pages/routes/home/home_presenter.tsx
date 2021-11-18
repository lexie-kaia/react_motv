import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Movie } from './home_container';
import Loader from 'components/loader';
import Error from 'components/error';
import Banner from 'components/banner';
import Section from 'components/section';
import SectionNav from 'components/section_nav';
import Poster from 'components/poster';

type Props = {
  nowPlaying: Movie[];
  popular: Movie[];
  upcoming: Movie[];
  currMovie: Movie;
  loading: boolean;
  error: string;
  navList: { name: string; pathname: string }[];
  pathname: string;
};

const HomePresenter = ({
  nowPlaying,
  popular,
  upcoming,
  currMovie,
  loading,
  error,
  navList,
  pathname,
}: Props) => (
  <>
    <Helmet>
      <title>Movies | MOTV</title>
    </Helmet>
    {error && <Error error={error} />}
    {loading ? (
      <Loader />
    ) : (
      <>
        <Banner
          id={currMovie.id}
          title={currMovie.original_title}
          score={currMovie.vote_average}
          overview={currMovie.overview}
          backdropUrl={currMovie.backdrop_path}
          isMovie={true}
        />

        <SectionNav navList={navList} pathname={pathname}></SectionNav>

        <Switch>
          <Route path="/movies/now_playing">
            <Section isPoster={true}>
              {nowPlaying &&
                nowPlaying.length > 0 &&
                nowPlaying.map(movie => (
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
          </Route>
          <Route path="/movies/popular">
            <Section isPoster={true}>
              {popular &&
                popular.length > 0 &&
                popular.map(movie => (
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
          </Route>
          <Route path="/movies/upcoming">
            <Section isPoster={true}>
              {upcoming &&
                upcoming.length > 0 &&
                upcoming.map(movie => (
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
          </Route>
        </Switch>
      </>
    )}
  </>
);

export default HomePresenter;
