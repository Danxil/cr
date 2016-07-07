import * as React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

export default (
  <Route path="/" component={App}>
    <Route path="products" component={ProductsContainer}></Route>
    <Route path="cart" component={CartContainer}></Route>
  </Route>
);