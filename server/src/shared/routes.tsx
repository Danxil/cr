import * as React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import ProductsContainer from './containers/ProductsContainer';
import Cart from './components/Cart';

export default (
  <Route path="/" component={App}>
    <Route path="products" component={ProductsContainer}></Route>
    <Route path="cart" component={Cart}></Route>
  </Route>
);