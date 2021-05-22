import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StarRating from './star_rating';

type Props = {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
  year: string;
  isMovie: boolean;
};

const GridItem = styled.li``;

const Container = styled.div`
  max-width: 10rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.4rem;
`;

const Info = styled.div``;

const Title = styled.h3`
  margin-top: 0.75rem;
  font-weight: 700;
`;

const Year = styled.span`
  display: block;
  margin-top: 0.4rem;
  color: #757575;
  font-size: 0.875rem;
`;

const Rating = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`;

const RatingScore = styled.div`
  color: #757575;
  font-weight: 700;
`;

const Poster = ({ id, title, imageUrl, year, rating, isMovie }: Props) => (
  <GridItem>
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <Image
          src={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : '/images/poster_default.jpg'
          }
          alt=""
        />
        <Info>
          <Title>{title}</Title>
          <Year>{year}</Year>
          <Rating>
            <StarRating rating={rating} />
            <RatingScore>{rating}</RatingScore>
          </Rating>
        </Info>
      </Container>
    </Link>
  </GridItem>
);

export default Poster;
