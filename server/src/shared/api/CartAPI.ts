import * as fetch from 'isomorphic-fetch';

export class CartAPI {
  static instance:CartAPI

  constructor(private prefix:string) {
  }
  
  addProductToCart(productId:string) {
    //hardcode
    return fetch(this.prefix + '/user/1/products/' + productId, {
      method: 'POST',
    })
  }

  getProductsInCart() {
    //hardcode
    return fetch(this.prefix + '/user/1/products')
  }

  removeProductFromCart(productId:string) {
    //hardcode
    return fetch(this.prefix + '/user/1/products/' + productId, {
      method: 'DELETE',
    })
  }

  static getInstance(...args) {

    if (!CartAPI.instance) {
      CartAPI.instance = new (Function.bind.apply(CartAPI, [CartAPI, ...args]))
    }

    return CartAPI.instance
  }
}