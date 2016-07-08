import * as React from 'react';
import {IAddProductToCartActionCreator, IRemoveProductFromCartActionCreator} from '../actions/CartActions';
import {IProduct} from '../../models/Product';
import {RouteComponentProps} from 'react-router';
import {IProductContainerOwnProps} from '../containers/ProductContainer';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

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

    var buttons = <div>{
        !this.props.cartMode ?
          !this.props.inCart ? <RaisedButton primary={true} label="Add to cart" onClick={this.props.addProductToCart}/> : '' :
        <RaisedButton secondary ={true} onClick={this.props.removeProductFromCart} label="Remove form cart" />
      }</div>

    return <Card>
      <CardHeader
        title={product.name}
        subtitle={this.props.inCart ? 'Already in cart' : ''}
      />
      <CardActions>
        {!this.props.hideButtons ? buttons : ''}
      </CardActions>
    </Card>
  }
}

export default Product
