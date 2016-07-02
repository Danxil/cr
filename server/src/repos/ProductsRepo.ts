import {Sequelize} from 'sequelize';
import {BaseRepo, IRepoBaseCRUD} from './BaseRepo';
import {IProduct} from '../models/Product';

export class ProductsRepo extends BaseRepo<IProduct> implements IRepoBaseCRUD<IProduct> {
  constructor(db:Sequelize) {
    super(db, 'Product');
  }
  
  list() {
    return this.model.findAll()
  }

  create(product:IProduct) {
    return this.model.create(product)
  }

  update(productId:string, product:IProduct) {
    return this.model.update(product, {where: {id: productId}, returning: true}).then((response)=> {
      return response[1][0]
    })
  }

  get(productId:string) {
    return this.model.findById(productId)
  }

  delete(productId:string) {
    return this.model.destroy({where: {id: productId}})
  }
}