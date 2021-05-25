import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Details, NavList } from './details_container';
import styled from '@emotion/styled';
import Loader from 'components/loader';
import ErrorMessage from 'components/error';
import DetailsInfo from 'components/detailsInfo';
import SectionNav from 'components/section_nav';
import Section from 'components/section';
import PosterSeasons from 'components/poster_seasons';

type Props = {
  details: Details;
  loading: boolean;
  error: string | null;
  isMovie: boolean;
  navList: NavList;
  pathname: string;
};

const Frame = styled.li``;

const Image = styled.img`
  width: 100%;
`;

const IframeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  & iframe,
  & object,
  & embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const DetailsPresenter = ({
  details,
  loading,
  error,
  isMovie,
  navList,
  pathname,
}: Props) => (
  <>
    <Helmet>
      <title>{`${details.title} | MOTV`}</title>
    </Helmet>
    {error && <ErrorMessage error={error} />}
    {loading ? (
      <Loader />
    ) : (
      <>
        <DetailsInfo details={details}></DetailsInfo>
        <SectionNav navList={navList} pathname={pathname}></SectionNav>

        <Switch>
          <Route
            exact
            path={isMovie ? `/movie/${details.id}` : `/tv/${details.id}`}
          >
            <Section isPoster={false}>
              {details.images?.map((image, index) => (
                <Frame key={index}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                    alt=""
                  />
                </Frame>
              ))}
            </Section>
          </Route>
          <Route
            path={
              isMovie
                ? `/movie/${details.id}/videos`
                : `/tv/${details.id}/videos`
            }
          >
            <Section isPoster={false}>
              {details.videos?.map((video, index) => (
                <Frame key={index}>
                  <IframeContainer>
                    <iframe
                      width="1904"
                      height="768"
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </IframeContainer>
                </Frame>
              ))}
            </Section>
          </Route>
          {!isMovie && (
            <Route path={`/tv/${details.id}/seasons`}>
              <Section isPoster={true}>
                {details.seasons?.map((season) => (
                  <PosterSeasons
                    key={season.id}
                    title={season.name}
                    imageUrl={season.poster_path}
                    year={season.air_date?.slice(0, 4)}
                    episodeCount={season.episode_count}
                  />
                ))}
              </Section>
            </Route>
          )}
        </Switch>
      </>
    )}
  </>
);

export default DetailsPresenter;
