import * as React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductsContainer}></IndexRoute>
    <Route path="cart" component={CartContainer}></Route>
  </Route>
);