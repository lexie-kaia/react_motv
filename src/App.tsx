import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from 'pages/layout/nav';
import Router from 'pages/layout/router';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
};

export default App;
