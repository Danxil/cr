import * as React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import CarsContainer from './containers/CarsContainer';
import Clients from './components/Clients';

export default (
  <Route path="/" component={App}>
    <Route path="cars" component={CarsContainer}></Route>
    <Route path="clients" component={Clients}></Route>
  </Route>
);