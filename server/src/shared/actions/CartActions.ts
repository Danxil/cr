import * as baseActionCreator from './index'
import {IPromise} from 'hapi';
import {cartAPI} from '../api'

export interface IGetProductsInCartAction extends baseActionCreator.IActionBase {
  type:string
  promise:IPromise<IResponse>
}

export interface IAddProductToCartAction extends baseActionCreator.IActionBase {
  type:string
  promise:IPromise<IResponse>
}

export interface IRemoveProductFromCartAction extends baseActionCreator.IActionBase {
  type:string
  promise:IPromise<IResponse>
}

export interface IGetProductsInCartActionCreator extends baseActionCreator.IActionBase {
  (productId:string):IGetProductsInCartAction
}

export interface IAddProductToCartActionCreator extends baseActionCreator.IActionBase {
  (productId:string):IAddProductToCartAction
}

export interface IRemoveProductFromCartActionCreator extends baseActionCreator.IActionBase {
  (productId:string):IRemoveProductFromCartAction
}

export namespace CartActionCreators {
  export function addProductToCart(productId:string):IAddProductToCartAction {
    return {
      type: 'ADD_PRODUCT_TO_CART',
      promise: cartAPI.addProductToCart(productId)
    }
  }

  export function getProductsInCart():IGetProductsInCartAction {
    return {
      type: 'GET_PRODUCTS_IN_CART',
      promise: cartAPI.getProductsInCart()
    }
  }

  export function removeProductFromCart(productId:string):IRemoveProductFromCartAction {
    return {
      type: 'REMOVE_PRODUCT_FROM_CART',
      promise: cartAPI.removeProductFromCart(productId)
    }
  }
}