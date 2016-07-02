import {Sequelize, Model} from 'sequelize';
import {IPromise} from "hapi";

interface IRepoBase<TModel> {
  model:Model<TModel, any>
  db:Sequelize
}

export interface IRepoBaseCRUD<TModel> {
  list():IPromise<TModel[]>
  get(modelId:string):IPromise<TModel>
  create(model:TModel):IPromise<TModel>
  update(modelId:string, model:TModel):IPromise<TModel>
  delete(modelId:string):IPromise<any>
}

export class BaseRepo<TModel> implements IRepoBase<TModel> {
  public model:Model<TModel, any>

  constructor(public db:Sequelize, modelName:string) {
    this.model = <Model<TModel, any>>db.models[modelName]
  }
}