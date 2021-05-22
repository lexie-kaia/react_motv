import React from 'react';
import styled from 'styled-components';
import { FaStar, FaStarHalf } from 'react-icons/fa';

type Props = {
  rating: number;
};

const Container = styled.div`
  color: orange;
`;

const useRating = (rating: number) => {
  const countFill = Math.floor(rating / 2);
  const countHalf = rating % 2 !== 0 ? 1 : 0;
  const countEmpty = 5 - (countFill + countHalf);
  let star = [];
  for (let i = 0; i < countFill; i++) {
    star.push('fill');
  }
  for (let i = 0; i < countHalf; i++) {
    star.push('half');
  }
  for (let i = 0; i < countEmpty; i++) {
    star.push('empty');
  }
  return star;
};

const StarRating = ({ rating }: Props) => {
  const star = useRating(rating);

  return (
    <Container>
      {star.map((item, index) => {
        switch (item) {
          case 'fill':
            return <FaStar key={index} />;
          case 'half':
            return <FaStarHalf key={index} />;
          case 'empty':
            return;
        }
      })}
    </Container>
  );
};

export default StarRating;
