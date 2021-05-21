import React from 'react';
import styled from 'styled-components';

type Props = {
  errorMessage: string;
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = ({ errorMessage }: Props) => (
  <Container>{errorMessage}</Container>
);

export default ErrorMessage;
