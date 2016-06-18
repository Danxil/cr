import * as Hapi from 'hapi';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import BaseCtrl from './BaseCtrl';

import App from '../components/App';

export default class CarsCtrl extends BaseCtrl {
  constructor(protected server:Hapi.Server) {
    super(server);

    this.server = server;
  }

  list():Hapi.IRouteAdditionalConfigurationOptions {
    return new CarsList;
  }
}

class CarsList implements Hapi.IRouteAdditionalConfigurationOptions {
  handler(req:Hapi.Request, reply:Hapi.IReply) {
    var app = ReactDOMServer.renderToString(React.createElement(App))

    reply.view('index', {app});
  }
}