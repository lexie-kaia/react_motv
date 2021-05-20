import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from 'pages/layout/nav';
import Router from 'pages/layout/router';
import GlobalStyle from 'styles/global_styles';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Router />
    </BrowserRouter>
  );
};

export default App;
