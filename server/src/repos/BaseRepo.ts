import {Sequelize, Model} from 'sequelize';
import {IPromise} from "hapi";

interface IRepoBase {
  new()

  model:Model
  db:Sequelize
}

export interface IRepoBaseCRUD {
  list():IPromise<any>
  get():IPromise<any>
  create():IPromise<any>
  delete():IPromise<any>
}

export default class BaseRepo implements IRepoBase {
  public model:Model
  
  constructor(public db:Sequelize, modelName:string) {
    this.model = db.model(modelName)
  }
}