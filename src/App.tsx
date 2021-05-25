import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from 'pages/layout/nav';
import Router from 'pages/layout/router';
import { Global } from '@emotion/react';
import styles from 'styles/global_styles';

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={styles} />
      <Nav />
      <Router />
    </BrowserRouter>
  );
};

export default App;
