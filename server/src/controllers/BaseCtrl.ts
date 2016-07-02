import * as Hapi from 'hapi';
import {Sequelize} from 'sequelize';

export default class BaseCtrl {
  db:Sequelize

  constructor(protected server:Hapi.Server) {
    this.server = server;

    this.db = this.server.plugins['hapi-sequelize'].market;
  }

  protected logInfo(message:string) {
    this.server.log('info', message);
  }

  protected logError(message:string) {
    this.server.log('error', message);
  }
}
