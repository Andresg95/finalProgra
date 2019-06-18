import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
