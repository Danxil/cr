import * as fetch from 'isomorphic-fetch';

export class CartAPI {
  static instance:CartAPI

  constructor(private prefix:string) {
    console.log(prefix)
  }
  
  addProductToCart(productId) {
    return fetch(this.prefix + '/cart/product/' + productId)
  }

  static getInstance(...args) {

    if (!CartAPI.instance) {
      CartAPI.instance = new (Function.bind.apply(CartAPI, [CartAPI, ...args]))
    }

    return CartAPI.instance
  }
}