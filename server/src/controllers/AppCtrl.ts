import * as Hapi from 'hapi';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {RouterContext, match} from 'react-router';
import * as history from 'history';
import * as Boom from 'boom';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import promiseMiddleware from '../shared/libs/promiseMiddleware';
import * as reducers from '../shared/reducers'

import BaseCtrl from './BaseCtrl';

import routes from '../shared/routes';

export default class AppCtrl extends BaseCtrl {
  constructor(protected server:Hapi.Server) {
    super(server);
  }

  index(req:Hapi.Request, reply:Hapi.IReply) {
    var location = history.createLocation(req.url.path)
    var reducer = combineReducers(reducers)
    var store = createStore(reducer, undefined, applyMiddleware(promiseMiddleware))

    match({routes, location}, (err:any, redirectLocation:any, renderProps:any) => {
      if (err) throw err;
      if (!renderProps) throw Boom.badRequest('This route is not exist');

      var routerContext = React.createElement(RouterContext, renderProps)
      var provider = React.createElement(Provider, {store}, routerContext)

      var resolves = renderProps.components.reduce((prev, current)=> {
        return (current.preload ? current.preload() : [])
          .concat((current.WrappedComponent ? current.WrappedComponent.preload() : []), prev)
      }, [])

      var promises = resolves.map((resolveItem)=> store.dispatch(resolveItem()))

      Promise.all(promises).then(()=> {
        var app = ReactDOMServer.renderToString(provider)
        reply.view('index', {app, initialState: JSON.stringify(store.getState())});
      })
    });
  }
}