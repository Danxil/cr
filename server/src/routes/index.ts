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
      handler: appCtrl.index.bind(appCtrl),
    });

    server.route({
      method: 'GET',
      path: '/products',
      handler: productsCtrl.list.bind(productsCtrl),
    });

    server.route({
      method: 'GET',
      path: '/products/{productId}',
      handler: productsCtrl.get.bind(productsCtrl),
    });

    server.route({
      method: 'POST',
      path: '/products',
      handler: productsCtrl.create.bind(productsCtrl),
    });


    server.route({
      method: 'PUT',
      path: '/products/{productId}',
      handler: productsCtrl.update.bind(productsCtrl),
    });

    server.route({
      method: 'DELETE',
      path: '/products/{productId}',
      handler: productsCtrl.delete.bind(productsCtrl),
    });
  }
}