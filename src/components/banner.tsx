import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Star from 'components/star';
import { BsChevronRight } from 'react-icons/bs';

type Props = {
  id: number;
  title: string;
  score: number;
  overview: string;
  backdropUrl: string;
};

const Backdrop = styled.div`
  padding: 2rem;

  @media screen and (min-width: 769px) {
    padding: 2rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 6rem;
  }
  width: 100%;
  height: 24rem;
  background: ${({ backdropUrl }: { backdropUrl: string }) =>
    backdropUrl
      ? `linear-gradient(rgba(3, 3, 3, 1), rgba(145, 152, 229, 0.5)),
    no-repeat 50% 30% / cover
      url(https://image.tmdb.org/t/p/original${backdropUrl})`
      : '#212121'};
  /* filter: blur(1px); */
  z-index: -1;
`;

const Info = styled.div`
  margin-top: 1.5rem;
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 4.8em;
  line-height: 1.6em;
  letter-spacing: 0.025em;
  @media screen and (min-width: 769px) {
    font-size: 1rem;
  }
`;

const Buttons = styled.div`
  margin-top: 1.5rem;
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

const ViewButton = styled(Button)`
  padding: 1px 1rem 0 1.2rem;
  background: rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 769px) {
    padding: 1px 1rem 0 1.3rem;
  }
`;

const Banner = ({ id, title, score, overview, backdropUrl }: Props) => (
  <Backdrop backdropUrl={backdropUrl}>
    <Info>
      <Title>{title}</Title>

      <Score>
        <Average>{score} / 10</Average>
        <Star score={score} />
      </Score>

      <Hr />

      <Overview>{overview}</Overview>

      <Buttons>
        <Link to={`/movie/${id}`}>
          <ViewButton>
            VIEW MORE <BsChevronRight />
          </ViewButton>
        </Link>
      </Buttons>
    </Info>
  </Backdrop>
);

export default Banner;
