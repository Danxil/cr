import * as Hapi from 'hapi';
import AppCtrl from '../controllers/AppCtrl';
import ProductsCtrl from '../controllers/ProductsCtrl';
import * as path from 'path'

export default class Routes {

  constructor(server:Hapi.Server) {
    const appCtrl = new AppCtrl(server);
    const productsCtrl = new ProductsCtrl(server);

    server.route({
      method: 'GET',
      path: '/{params*}',
      handler: null,
      config: appCtrl.index()
    });

    server.route({
      method: 'GET',
      path: '/products',
      handler: null,
      config: productsCtrl.list()
    });
  }
}