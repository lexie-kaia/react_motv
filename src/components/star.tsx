import React from 'react';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type Props = {
  score: number;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;

  @media screen and (min-width: 769px) {
    font-size: 1rem;
  }
`;

const Span = styled.span`
  display: inline-block;
  margin: 0 0.3rem;
  padding-top: 2px;
`;

const useRating = (score: number) => {
  const countFill = Math.floor(score / 2);
  const countHalf = score % 2 !== 0 ? 1 : 0;
  const countEmpty = 5 - (countFill + countHalf);
  let star = [];
  for (let i = 0; i < countFill; i++) {
    star.push(<FaStar />);
  }
  for (let i = 0; i < countHalf; i++) {
    star.push(<FaStarHalfAlt />);
  }
  for (let i = 0; i < countEmpty; i++) {
    star.push(<FaRegStar />);
  }
  return star;
};

const Star = ({ score }: Props) => {
  const star = useRating(score);

  return (
    <Container aria-hidden="true">
      {star.map((item, index) => (
        <Span key={index}>{item}</Span>
      ))}
    </Container>
  );
};

export default Star;
