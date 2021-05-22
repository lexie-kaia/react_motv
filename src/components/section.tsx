import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  children: ReactNode;
};

const Container = styled.section`
  padding: 2rem 0 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
  gap: 1rem;
`;

const Section = ({ title, children }: Props) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

export default Section;
