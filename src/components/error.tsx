import React from 'react';
import styled from '@emotion/styled';

type Props = {
  error: string;
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: -1;
`;

const ErrorMessage = ({ error }: Props) => <Container>{error}</Container>;

export default ErrorMessage;
