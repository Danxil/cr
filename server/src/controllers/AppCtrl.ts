import * as Hapi from 'hapi';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {RouterContext, match} from 'react-router';
import * as history from 'history';
import * as Boom from 'boom';

import BaseCtrl from './BaseCtrl';

import routes from '../shared/routes';

export default class AppCtrl extends BaseCtrl {
  constructor(protected server:Hapi.Server) {
    super(server);

    this.server = server;
  }

  index():Hapi.IRouteAdditionalConfigurationOptions {
    function handler(req:Hapi.Request, reply:Hapi.IReply) {
      var location = history.createLocation(req.url.path)

      match({routes, location}, (err:any, redirectLocation:any, renderProps:any) => {
        if (err) throw err;
        if (!renderProps) throw Boom.badRequest('This route is not exist');

        var app = ReactDOMServer.renderToString(React.createElement(RouterContext, renderProps))

        reply.view('index', {app});
      });
    }

    return {
      handler
    };
  }
}