import * as React from 'react';
import {RouteComponentProps} from "react-router";

import {
  IGetProductsInCartActionCreator,
  IAddProductToCartActionCreator,
  IRemoveProductFromCartActionCreator
} from '../actions/CartActions';
import {IProduct} from '../../models/Product';
import ProductContainer from '../containers/ProductContainer';

interface ICartRouteParams {
}

export interface ICartState {
}

export interface ICartProps extends RouteComponentProps<ICartRouteParams, any> {
  getProductsInCart():IGetProductsInCartActionCreator
  addPoductToCart():IAddProductToCartActionCreator
  removePoductFromCart():IRemoveProductFromCartActionCreator
  preload:any
  cart:IProduct[]
}

export class Cart extends React.Component<ICartProps, ICartState> {
  constructor(public props:ICartProps) {
    super()
  }

  render() {
    var {cart} = this.props

    return <div>
      {cart.map((product:IProduct)=> {
        return <div key={product.id}>
          <ProductContainer product={product} cartMode={true} />
        </div>
      })}
    </div>
  }
}

export default Cart
