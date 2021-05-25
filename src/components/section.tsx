import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  title?: string;
  children: ReactNode;
  isPoster: boolean;
};

const Container = styled.section`
  padding: 2rem;
  @media screen and (min-width: 769px) {
    padding: 2rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 6rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: ${({ isPoster }: { isPoster: boolean }) =>
    isPoster ? 'repeat(2, 1fr)' : ''};
  gap: 1.5rem;

  @media screen and (min-width: 769px) {
    grid-template-columns: ${({ isPoster }: { isPoster: boolean }) =>
      isPoster ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'};
    gap: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: ${({ isPoster }: { isPoster: boolean }) =>
      isPoster ? 'repeat(6, 1fr)' : 'repeat(3, 1fr)'};
    gap: 2rem;
  }
`;

const Section = ({ title, children, isPoster }: Props) => (
  <Container>
    {title && <Title>{title}</Title>}
    <List isPoster={isPoster}>{children}</List>
  </Container>
);

export default Section;
