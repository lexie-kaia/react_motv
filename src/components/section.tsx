import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  children: ReactNode;
};

const Container = styled.section`
  padding: 1rem 0;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Grid = styled.ul``;

const Section = ({ title, children }: Props) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

export default Section;
