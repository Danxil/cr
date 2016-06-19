import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import routes from './shared/routes';

var props = {
  history: browserHistory,
  routes
}

ReactDOM.render(
  React.createElement(Router, props),
  document.getElementById('react-container')
)