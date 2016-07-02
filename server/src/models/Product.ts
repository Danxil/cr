import {DataTypes, Sequelize} from 'sequelize';

export interface IProduct {
  id?
  name:string
  price:number
}

export default function Product(sequelize:Sequelize, DataTypes:DataTypes) {
  return sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT
  })
}