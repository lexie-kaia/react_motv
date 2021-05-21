import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Details from 'pages/routes/details';
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
    <Route path="/search/:term">
      <Search />
    </Route>
    <Route path="/movie/:id">
      <Details />
    </Route>
    <Route path="/tv/:id">
      <Details />
    </Route>
    <Redirect from="*" to="/" />
  </Switch>
);

export default Router;
