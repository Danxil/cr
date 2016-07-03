import * as baseActionCreator from './index'
import {IProduct} from '../../models/Product';
import {IPromise} from 'hapi';
import * as fetch from 'isomorphic-fetch';


export interface IGetProductsAction extends baseActionCreator.IActionBase {
  type:string
  promise:IPromise<IResponse>
}


export interface IGetProductsActionSuccess extends baseActionCreator.IActionBase {
  type:string
  result:IProduct[]
}

export interface ICreateProductAction extends baseActionCreator.IActionBase {
  type:string
  product:IProduct
}

export interface IDeleteProductAction extends baseActionCreator.IActionBase {
  type:string
  productId:string
}

export namespace ProductsActionCreators {
  export function getProducts():IGetProductsAction {
    return {
      type: 'GET_PRODUCTS',
      promise: fetch('http://localhost:5000/api/products')
    }
  }

  export function createProduct(product:IProduct):ICreateProductAction {
    return {
      type: 'CREATE_PRODUCT',
      product
    }
  }

  export function deleteProduct(productId:string):IDeleteProductAction {
    return {
      type: 'DELETE_PRODUCT',
      productId
    }
  }
}