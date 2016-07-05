import {Sequelize} from 'sequelize';
import {BaseRepo, IRepoBaseCRUD} from './BaseRepo';
import {IUser} from '../models/User';
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
}