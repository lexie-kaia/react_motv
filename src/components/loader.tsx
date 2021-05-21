import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #e6e6e6;
  border-bottom: 2px solid #424242;
  animation: ${rotate} 500ms linear infinite;
`;

const Loader = () => (
  <Container>
    <Loading />
  </Container>
);

export default Loader;
