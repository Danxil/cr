import * as fetch from 'isomorphic-fetch';

export class ProductsAPI {
  static instance:ProductsAPI

  constructor(private prefix:string) {
    console.log(prefix)
  }
  
  getProducts() {
    return fetch(this.prefix + '/products')
  }

  static getInstance(...args) {

    if (!ProductsAPI.instance) {
      ProductsAPI.instance = new (Function.bind.apply(ProductsAPI, [ProductsAPI, ...args]))
    }

    return ProductsAPI.instance
  }
}