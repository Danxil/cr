import * as baseActionCreator from './index'
import {IProduct} from '../../models/Product';
import {IPromise} from 'hapi';
import {productsAPI} from '../api'


export interface IGetProductsAction extends baseActionCreator.IActionBase {
  type:string
  promise:IPromise<IResponse>
}

//Actions
export interface IGetProductsSuccessAction extends baseActionCreator.IActionBase {
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

//Action creators
export interface IGetProductsActionCreator extends baseActionCreator.IActionBase {
  ():IGetProductsSuccessAction
}

export interface ICreateProductActionCreator extends baseActionCreator.IActionBase {
  (product:IProduct):ICreateProductAction
}

export interface IDeleteProductActionCreator extends baseActionCreator.IActionBase {
  (productId:string):IDeleteProductAction
}

export namespace ProductsActionCreators {
  export function getProducts() {
    return {
      type: 'GET_PRODUCTS',
      promise: productsAPI.getProducts()
    }
  }

  export function createProduct(product:IProduct) {
    return {
      type: 'CREATE_PRODUCT',
      product
    }
  }

  export function deleteProduct(productId:string) {
    return {
      type: 'DELETE_PRODUCT',
      productId
    }
  }
}