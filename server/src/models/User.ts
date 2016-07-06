import {DataTypes, Sequelize, Model} from 'sequelize';
import {IProduct} from './Product'
import {IPromise} from "hapi";

export interface IUser {
  id?
  name:string
  getProducts?():IPromise<IProduct[]>
  addProduct?(product:IProduct):IPromise<IProduct[]>
  removeProduct?(product:IProduct):IPromise<IProduct[]>
}

export default function(sequelize:Sequelize, DataTypes:DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsToMany(models.Product, {through: 'UserProduct'})
      }
    }
  })

  return User
}