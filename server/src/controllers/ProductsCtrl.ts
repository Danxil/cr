import * as Hapi from 'hapi';
import * as React from 'react';
import BaseCtrl from './BaseCtrl';
import {Sequelize} from 'sequelize';

export default class ProductsCtrl extends BaseCtrl {
  db:Sequelize

  constructor(protected server:Hapi.Server) {
    super(server);
  }

  list():Hapi.IRouteAdditionalConfigurationOptions {
    function handler(req:Hapi.Request, reply:Hapi.IReply) {
      console.log(this.db.models.Product)

      reply.response(11)
    }

    return {
      handler: handler.bind(this)
    };
  }
}