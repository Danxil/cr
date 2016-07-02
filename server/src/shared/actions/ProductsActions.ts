import * as baseActionCreator from './index'

export interface IProduct {
  model:string
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