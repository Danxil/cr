import * as Hapi from 'hapi';
import AppCtrl from '../controllers/AppCtrl';
import ProductsCtrl from '../controllers/ProductsCtrl';

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
      path: '/api/products',
      handler: productsCtrl.list.bind(productsCtrl),
    });

    server.route({
      method: 'GET',
      path: '/api/products/{productId}',
      handler: productsCtrl.get.bind(productsCtrl),
    });

    server.route({
      method: 'POST',
      path: '/api/products',
      handler: productsCtrl.create.bind(productsCtrl),
    });


    server.route({
      method: 'PUT',
      path: '/api/products/{productId}',
      handler: productsCtrl.update.bind(productsCtrl),
    });

    server.route({
      method: 'DELETE',
      path: '/api/products/{productId}',
      handler: productsCtrl.delete.bind(productsCtrl),
    });
  }
}