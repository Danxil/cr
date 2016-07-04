import * as React from 'react';
import {IAddProductToCartActionCreator} from '../actions/CartActions';
import {IProduct} from '../../models/Product';
import {RouteComponentProps} from 'react-router';

interface IProductRouteParams {
}

export interface IProductState {
}

export interface IProductProps extends RouteComponentProps<IProductRouteParams, any> {
  product:IProduct
  addProductToCart():IAddProductToCartActionCreator
}

export class Product extends React.Component<IProductProps, IProductState> {
  constructor(public props:IProductProps) {
    super()
  }

  render() {
    var product:IProduct = this.props.product

    return (
      <div>
        <p>{product.name}</p>
        <button onClick={this.props.addProductToCart}>Add to cart</button>
      </div>
    )
  }
}

export default Product
