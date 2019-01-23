/* tslint:disable:jsx-use-translation-function */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PortfolioContainer } from './containers';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={PortfolioContainer} />
  </Switch>
);
