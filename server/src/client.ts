import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import promiseMiddleware from './shared/libs/promiseMiddleware';
import routes from './shared/routes';
import * as reducers from './shared/reducers';

var props = {
  history: browserHistory,
  routes
}

var initialState = window['__INITIAL_STATE__'];

var reducer = combineReducers(reducers)
var store = createStore(reducer, initialState, applyMiddleware(promiseMiddleware))

var router = React.createElement(Router, props);
var provider = React.createElement(Provider, {store}, router);
var muiProvider = React.createElement(MuiThemeProvider, null, provider);

ReactDOM.render(
  muiProvider,
  document.getElementById('react-container')
)