import * as React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import Cars from './components/Cars';
import Clients from './components/Clients';

export default (
  <Route path="/" component={App}>
    <Route path="cars" component={Cars}></Route>
    <Route path="clients" component={Clients}></Route>
  </Route>
);