import {Sequelize} from 'sequelize';
import {BaseRepo, IRepoBaseCRUD} from './BaseRepo';
import {IUser} from '../models/User';
import {IProduct} from '../models/Product';
import {Model} from 'sequelize';

export class UsersRepo extends BaseRepo<IUser>{
  constructor(db:Sequelize) {
    super(db, 'User');
  }
  
  getUserProducts(userId:string) {
    return this.model.findOne({where: {id: userId}}).then((user:IUser)=> {
      return user.getProducts()
    })
  }

  addUserProduct(userId:string, productId:string) {
    var promises:[Promise<IUser>, Promise<IProduct>] = [
      this.model.findOne({where: {id: userId}}),
      this.db.models['Product'].findOne({where: {id: productId}})
    ]

    return Promise.all<IUser, IProduct>(promises).then((result)=> {
      var user:IUser = result[0]
      var product:IProduct = result[1]

      return user.addProduct(product)
    })
  }

  removeUserProduct(userId:string, productId:string) {
    var promises:[Promise<IUser>, Promise<IProduct>] = [
      this.model.findOne({where: {id: userId}}),
      this.db.models['Product'].findOne({where: {id: productId}})
    ]

    return Promise.all<IUser, IProduct>(promises).then((result)=> {
      var user:IUser = result[0]
      var product:IProduct = result[1]

      return user.removeProduct(product)
    })
  }
}