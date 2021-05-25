import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

type Props = {
  id: number;
  imageUrl: string;
  title: string;
  score: number;
  year: string;
  isMovie: boolean;
};

const Item = styled.li``;

const Content = styled.div`
  max-width: 14rem;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
`;

const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1.5rem 1rem;
  width: 100%;
  height: 24rem;
  background: ${({ url }: { url: string }) =>
    `linear-gradient(rgba(0,0,0,0) 0%, rgba(44,46,69,0.3) 50%, rgba(23,25,37,1) 80%)
  , no-repeat 50% 0 / contain url(${url})`};
`;

const Score = styled.div`
  display: inline-block;
  height: 1.8rem;
  padding: 0 0.6rem;
  /* margin-bottom: 0.5rem; */
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.4);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.8rem;
  text-align: center;
`;

const Title = styled.h3`
  margin: 0.6rem 0 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
`;

const Year = styled.div`
  font-size: 0.875rem;
  color: #bdbdbd;
`;

const Poster = ({ id, title, imageUrl, year, score, isMovie }: Props) => (
  <Item>
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Content>
        <Img
          url={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : '/images/poster_default.jpg'
          }
        >
          <Score>{score}</Score>
          <Title>{title}</Title>
          <Year>{year}</Year>
        </Img>
      </Content>
    </Link>
  </Item>
);

export default Poster;
