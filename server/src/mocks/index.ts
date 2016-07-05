import {Sequelize} from 'sequelize';
import {IProduct} from '../models/Product';
import {IUser} from '../models/User';
import {Model} from 'sequelize';

export default function mocks(db:Sequelize) {
  var Product = db.models['Product']
  var User = db.models['User']
  var UserProduct = db.models['UserProduct']

  var promises = [];
  
  promises.push(
    Product.bulkCreate(<IProduct[]>[
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

  promises.push(User.bulkCreate(<IUser[]>[
    {
      name: 'User 1'
    }
  ]))



  return Promise.all(promises).then(()=> {
    var promises2 = []

    promises2.push((function () {
      User.findOne({where: {id: 1}}).then((user)=> {
        return Product.findOne({where: {id: 1}}).then((product)=> {return {product, user}})
      }).then((obj)=> {

        return obj.user.addProduct(obj.product)
      })
    })())

    return promises2
  })
}