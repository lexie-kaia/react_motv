import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Detail from 'pages/routes/detail';
import Home from 'pages/routes/home';
import Search from 'pages/routes/search';
import Tv from 'pages/routes/tv';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/tv">
      <Tv />
    </Route>
    <Route path="/search">
      <Search />
    </Route>
    <Route path="/detail">
      <Detail />
    </Route>
    <Redirect from="*" to="/" />
  </Switch>
);

export default Router;
