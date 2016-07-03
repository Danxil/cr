import * as React from 'react';
import {IProduct} from '../../models/Product';

export interface IProductsState {
  products:IProduct[]
}

export interface IProductsProps {
  product:IProduct[]
  getProducts():IGetProductsAction
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
    var {products} = this.props

    return (
      <div>
        <button onClick={this.props.getProducts}>Get products</button>
        <strong>Products !1111111111</strong>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default Products
