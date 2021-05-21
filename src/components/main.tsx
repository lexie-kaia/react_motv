import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  padding: 4rem 2rem 0 2rem;
`;

const Main = ({ children }: Props) => <Container>{children}</Container>;

export default Main;
