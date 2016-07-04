import * as baseActionCreator from './index'
import {IPromise} from 'hapi';
import * as fetch from 'isomorphic-fetch';
import {productsAPI} from '../api'

export interface IAddProductToCartAction extends baseActionCreator.IActionBase {
  type:string
  promise:IPromise<IResponse>
}

export interface IAddProductToCartActionCreator extends baseActionCreator.IActionBase {
  (productId:string):IAddProductToCartAction
}

export namespace CartActionCreators {
  export function addProductToCart(productId:string):IAddProductToCartAction {
    console.log(productId)
    return {
      type: 'ADD_PRODUCT_TO_CART',
      promise: fetch('http://localhost:5000/api/cart/product/' + productId)
    }
  }
}