import {Sequelize} from 'sequelize';
import {IProduct} from '../models/Product';

export default function mocks(db:Sequelize) {
  var Products = db.models['Product']
  
  var promises = [];
  
  promises.push(
    Products.bulkCreate(<IProduct[]>[
      {
        name: 'Product 1',
        price: 22.3
      },
      {
        name: 'Product 2',
        price: 10.3
      },
      {
        name: 'Product 3',
        price: 2233.00
      }
    ])
  )
  
  return promises;
}