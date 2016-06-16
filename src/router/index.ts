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
  }
}