import React from 'react';
import { Details } from './details_container';
import styled from 'styled-components';
import Main from 'components/main';
import Loader from 'components/loader';
import ErrorMessage from 'components/error_message';
import { spawn } from 'child_process';

type Props = {
  title: string | undefined;
  year: string | undefined;
  runtime: number | undefined;
  genres: { id: number; name: string }[] | undefined;
  overview: string | undefined;
  poster_path: string | undefined;
  backdrop_path: string | undefined;
  videos: { id: string; key: string; name: string }[] | undefined;
  loading: boolean;
  error: string | null;
  isMovie: boolean;
};

const Banner = styled.div`
  position: relative;
  height: 450px;
  margin: 1rem auto;
`;

const Info = styled.div`
  padding: 3rem;
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 700;
`;

const Meta = styled.div`
  margin-bottom: 1.5rem;
`;

const Data = styled.span`
  font-size: 1.125rem;
  color: #bdbdbd;
  &:not(:last-child) {
    margin-right: 1rem;

    &::after {
      content: '•';
      margin-left: 1rem;
    }
  }
`;

const Genre = styled.span`
  &:not(:last-child)::after {
    content: ' / ';
  }
`;

const Overview = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
`;

const Backdrop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(145, 152, 229, 0.5)),
    no-repeat 50% 30% / cover
      url(${(props: { backdropUrl: string }) => props.backdropUrl});
  z-index: -1;
`;

const Section = styled.div`
  padding: 1rem 2rem;
`;

const SetionTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Videos = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const VideoTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
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
  title,
  year,
  runtime,
  genres,
  overview,
  poster_path,
  backdrop_path,
  videos,
  loading,
  error,
  isMovie,
}: Props) => (
  <>
    {error && <ErrorMessage errorMessage={error} />}

    {loading ? (
      <Loader />
    ) : (
      <>
        <Main>
          <Banner>
            <Info>
              <Title>{title}</Title>
              <Meta>
                <Data>{year}</Data>
                <Data>{runtime}min</Data>
                <Data>
                  {genres?.map((item) => (
                    <Genre key={item.id}>{item.name}</Genre>
                  ))}
                </Data>
              </Meta>
              <Overview>{overview}</Overview>
            </Info>
            <Backdrop
              backdropUrl={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/original${backdrop_path}`
                  : ''
              }
            />
          </Banner>

          <Section>
            <SetionTitle>Videos</SetionTitle>
            <Videos>
              {videos?.map((item) => (
                <li key={item.id}>
                  <IframeContainer>
                    <iframe
                      width="1904"
                      height="768"
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </IframeContainer>
                </li>
              ))}
            </Videos>
          </Section>
        </Main>
      </>
    )}
  </>
);

export default DetailsPresenter;
