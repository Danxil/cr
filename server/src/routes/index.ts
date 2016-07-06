import * as Hapi from 'hapi';
import AppCtrl from '../controllers/AppCtrl';
import ProductsCtrl from '../controllers/ProductsCtrl';
import UsersCtrl from '../controllers/UsersCtrl';

export default class Routes {
  constructor(server:Hapi.Server) {
    const appCtrl = new AppCtrl(server);
    const productsCtrl = new ProductsCtrl(server);
    const usersCtrl = new UsersCtrl(server);

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

    server.route({
      method: 'GET',
      path: '/api/user/{userId}/products',
      handler: usersCtrl.getUserProducts.bind(usersCtrl),
    });

    server.route({
      method: 'POST',
      path: '/api/user/{userId}/products/{productId}',
      handler: usersCtrl.addUserProduct.bind(usersCtrl),
    });

    server.route({
      method: 'DELETE',
      path: '/api/user/{userId}/products/{productId}',
      handler: usersCtrl.removeUserProduct.bind(usersCtrl),
    });
  }
}