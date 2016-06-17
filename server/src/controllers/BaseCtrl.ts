import * as Hapi from 'hapi';

export default class BaseCtrl {
  constructor(protected server:Hapi.Server) {
    this.server = server;
  }

  protected logInfo(message:string) {
    this.server.log('info', message);
  }

  protected logError(message:string) {
    this.server.log('error', message);
  }
}
