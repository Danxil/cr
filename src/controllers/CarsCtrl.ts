import * as Hapi from 'hapi';
import BaseCtrl from "./BaseCtrl";

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
    reply(null, 'ololo');
  }
}