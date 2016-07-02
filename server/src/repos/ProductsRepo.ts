import {Sequelize, Model} from 'sequelize';
import {BaseRepo, IRepoBaseCRUD} from './BaseRepo';
import {IProduct} from '../shared/actions/ProductsActions';
import {IPromise} from 'hapi';

export default class ProductsRepo extends BaseRepo implements IRepoBaseCRUD {
  constructor(protected db:Sequelize) {
    super(db, 'Products');
  }
  
  list():IPromise<IProduct[]> {
    return this.model.findAll()
  }
  
  create() {
    this.model.create()
  }

  get() {
    this.model.findOne()
  }

  delete() {
    this.model.drop()
  }
}