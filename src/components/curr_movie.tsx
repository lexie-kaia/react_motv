import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Star from 'components/star';
import { BsChevronRight } from 'react-icons/bs';

export type Details = {
  id: number;
  original_title: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  genres: { id: number; name: string }[];
  production_companies: { id: number; logo_path: string; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  overview: string;
  imdb_id: string;
  poster_path: string;
  backdrop_path: string;
  videos?: {
    results: { id: string; key: string; name: string }[];
  };
};

type Props = {
  currMovie: Details;
};

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14rem;

  @media screen and (min-width: 769px) {
    margin-top: 10rem;
    flex-direction: row;
  }
`;

const Info = styled.div`
  max-width: 36rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 700;

  @media screen and (min-width: 769px) {
    margin-bottom: 1.25rem;
    font-size: 3rem;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  @media screen and (min-width: 769px) {
    font-size: 1rem;
  }
`;

const Data = styled.span`
  &:not(:last-child)::after {
    content: '•';
    margin: 0 0.75rem;
  }

  @media screen and (min-width: 769px) {
    &:not(:last-child)::after {
      margin: 0 1rem;
    }
  }
`;

const Span = styled.span`
  &:not(:last-child)::after {
    content: ' / ';
  }
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Average = styled.span`
  display: block;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 1rem;
  margin-right: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.75);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 2rem;
  text-align: center;
`;

const Hr = styled.div`
  margin: 0.875rem 0;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
  @media screen and (min-width: 769px) {
    margin: 1.125rem 0 0.875rem;
  }
`;

const Overview = styled.p`
  font-size: 0.875rem;
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 4.8em; */
  line-height: 1.6em;
  letter-spacing: 0.025em;
  @media screen and (min-width: 769px) {
    font-size: 1rem;
  }
`;

const Production = styled.div`
  margin-top: 1rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 500;
  @media screen and (min-width: 769px) {
    font-size: 1rem;
  }
`;

const Company = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Buttons = styled.div`
  margin-top: 1.5rem;
`;

const Anchor = styled.a`
  margin-right: 1rem;
`;

const Button = styled.div`
  display: inline-flex;
  align-items: center;
  height: 2.4rem;
  padding: 1px 1.2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0);
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 200ms;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  @media screen and (min-width: 769px) {
    height: 2.6rem;
    padding: 1px 1.3rem 0;
  }
`;

const ImdbButton = styled(Button)``;

const ViewButton = styled(Button)`
  padding: 1px 1rem 0 1.2rem;
  background: rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 769px) {
    padding: 1px 1rem 0 1.3rem;
  }
`;

const CurrMovie = ({ currMovie }: Props) => (
  <Container>
    <Info>
      <Title>{currMovie.original_title}</Title>

      <Meta>
        <Data>{currMovie.release_date.slice(0, 4)}</Data>
        <Data>{currMovie.runtime}min</Data>
        <Data>
          {currMovie.production_countries.map((item) => (
            <Span key={item.iso_3166_1}>{item.iso_3166_1}</Span>
          ))}
        </Data>
      </Meta>
      <Meta>
        <Data>
          {currMovie.genres.map((item) => (
            <Span key={item.id}>{item.name}</Span>
          ))}
        </Data>
      </Meta>

      <Score>
        <Average>{currMovie.vote_average} / 10</Average>
        <Star score={currMovie.vote_average} />
      </Score>

      <Meta>
        <Production>
          {currMovie.production_companies.map((item) => (
            <Company key={item.id}>{item.name}</Company>
          ))}
        </Production>
      </Meta>

      <Hr />

      <Overview>{currMovie.overview}</Overview>

      <Buttons>
        <Anchor href="/">
          <ImdbButton>IMDB</ImdbButton>
        </Anchor>
        <Link to="/">
          <ViewButton>
            VIEW MORE <BsChevronRight />
          </ViewButton>
        </Link>
      </Buttons>
    </Info>
  </Container>
);

export default CurrMovie;
