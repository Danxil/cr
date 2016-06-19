import * as Hapi from 'hapi';
import AppCtrl from '../controllers/AppCtrl';

export default class Routes {

  constructor(server:Hapi.Server) {
    const appCtrl = new AppCtrl(server);

    server.route({
      method: 'GET',
      path: '/{params*}',
      handler: null,
      config: appCtrl.index()
    });
  }
}