import * as React from 'react';
import {ICreateProductAction, IDeleteProductAction, IGetProductsAction, ProductsActionCreators} from '../actions/ProductsActions';
import {IProduct} from '../../models/Product';
import {RouteComponentProps} from 'react-router';
import {IPromise} from "hapi";

export interface IProductsState {
}

interface IProductRouteParams {

}

export interface IProductsProps extends RouteComponentProps<IProductRouteParams, any> {
  products:IProduct[]
  getProducts():IGetProductsAction
  createProduct(product:IProduct):ICreateProductAction
  deleteProduct(id:string):IDeleteProductAction
  preload:any
}

export class Products extends React.Component<IProductsProps, IProductsState> {
  constructor(public props:IProductsProps) {
    super()

    if (typeof window != 'undefined') {
      this.props.preload.forEach((item)=> item())
    }
  }

  render() {
    var {products} = this.props

    return (
      <div>
        <strong>Products !1111111111</strong>
        <ul>
          {products.map((product:IProduct)=>{
            return <li key={product.id}>{product.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Products
