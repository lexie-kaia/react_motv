import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Tv } from './tv_container';
import Loader from 'components/loader';
import Error from 'components/error';
import Banner from 'components/banner';
import Section from 'components/section';
import SectionNav from 'components/section_nav';
import Poster from 'components/poster';

type Props = {
  airingToday: Tv[];
  popular: Tv[];
  topRated: Tv[];
  currTv: Tv;
  loading: boolean;
  error: string;
  navList: { name: string; pathname: string }[];
  pathname: string;
};

const TvPresenter = ({
  airingToday,
  popular,
  topRated,
  currTv,
  loading,
  error,
  navList,
  pathname,
}: Props) => (
  <>
    {error && <Error error={error} />}
    {loading ? (
      <Loader />
    ) : (
      <>
        <Banner
          id={currTv.id}
          title={currTv.original_name}
          score={currTv.vote_average}
          overview={currTv.overview}
          backdropUrl={currTv.backdrop_path}
          isMovie={false}
        />

        <SectionNav navList={navList} pathname={pathname}></SectionNav>

        <Switch>
          <Route path="/tvs/airing_today">
            <Section isPoster={true}>
              {airingToday &&
                airingToday.length > 0 &&
                airingToday.map((tv) => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    title={tv.original_name}
                    imageUrl={tv.poster_path}
                    year={tv.first_air_date.slice(0, 4)}
                    score={tv.vote_average}
                    isMovie={false}
                  />
                ))}
            </Section>
          </Route>
          <Route path="/tvs/popular">
            <Section isPoster={true}>
              {popular &&
                popular.length > 0 &&
                popular.map((tv) => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    title={tv.original_name}
                    imageUrl={tv.poster_path}
                    year={tv.first_air_date.slice(0, 4)}
                    score={tv.vote_average}
                    isMovie={false}
                  />
                ))}
            </Section>
          </Route>
          <Route path="/tvs/top_rated">
            <Section isPoster={true}>
              {topRated &&
                topRated.length > 0 &&
                topRated.map((tv) => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    title={tv.original_name}
                    imageUrl={tv.poster_path}
                    year={tv.first_air_date.slice(0, 4)}
                    score={tv.vote_average}
                    isMovie={false}
                  />
                ))}
            </Section>
          </Route>
        </Switch>
      </>
    )}
  </>
);

export default TvPresenter;
