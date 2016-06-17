import * as Hapi from 'hapi';
import CarsCtrl from '../controllers/CarsCtrl';

export default class Router {

  constructor(server:Hapi.Server) {
    const carsCtrl = new CarsCtrl(server);

    server.route({
      method: 'GET',
      path: '/cars',
      handler: null,
      config: carsCtrl.list()
    });

    server.register(require('inert'), (err) => {
      if (err) throw err

      server.route({
        method: 'GET',
        path: '/public/{param*}',
        handler: {
          directory: {
            path: 'public'
          }
        }
      });
    })
  }
}