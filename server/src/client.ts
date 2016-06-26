import * as Immutable from 'immutable';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import routes from './shared/routes';
import * as reducers from './shared/reducers';

var reducer = combineReducers(reducers)
var store = createStore(reducer)

var props = {
  history: browserHistory,
  routes
}

var initialState = window['__INITIAL_STATE__'];

for (let key in initialState) {
  initialState[key] = Immutable.fromJS(initialState[key])
}

var router = React.createElement(Router, props);
var provider = React.createElement(Provider, {store}, router);

ReactDOM.render(
  provider,
  document.getElementById('react-container')
)