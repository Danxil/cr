import * as React from 'react';
import {IAddProductToCartActionCreator, IRemoveProductFromCartActionCreator} from '../actions/CartActions';
import {IProduct} from '../../models/Product';
import {RouteComponentProps} from 'react-router';
import {IProductContainerOwnProps} from '../containers/ProductContainer';

interface IProductRouteParams {
}

export interface IProductState {
}

export interface IProductProps extends RouteComponentProps<IProductRouteParams, any> {
  addProductToCart():IAddProductToCartActionCreator
  removeProductFromCart():IRemoveProductFromCartActionCreator
}

export class Product extends React.Component<IProductProps & IProductContainerOwnProps, IProductState> {
  constructor(public props:IProductProps & IProductContainerOwnProps) {
    super()
  }

  render() {
    var product:IProduct = this.props.product

    var buttons = <div>
      {!this.props.cartMode ?
        <button onClick={this.props.addProductToCart}>Add to cart</button> :
        <button onClick={this.props.removeProductFromCart}>Remove form cart</button>
      }
    </div>

    return (
      <div>
        <p>{product.name}</p>
        {!this.props.hideButtons ? buttons : ''}
      </div>
    )
  }
}

export default Product
