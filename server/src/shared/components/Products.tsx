import * as React from 'react';
import {IProduct, ICreateProductAction, IDeleteProductAction} from '../actions/ProductsActions';

export interface IProductsState {
  products:IProduct[]
}

export interface IProductsProps {
  products:IProduct[]
  createProduct(product:IProduct):ICreateProductAction
  deleteProduct(id:string):IDeleteProductAction
}

export class Products extends React.Component<IProductsProps, IProductsState> {
  state:IProductsState

  constructor(public props) {
    super()

    this.state = {
      products: props.products
    }
  }

  render() {

    return (
      <div>
        <strong>Products !1111111111</strong>
      </div>
    )
  }
}

export default Products
