import * as React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {CartActionCreators, IGetProductsInCartActionCreator} from '../actions/CartActions'
import {IProduct} from '../../models/Product';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';


var PRELOAD = (params?, query?)=> {
  return [
    CartActionCreators.getProductsInCart
  ]
}

function mapStateToProps(state) {
  return {cart: state.market.cart}
}

function mapDispatchToProps(dispatch) {
  var preload = PRELOAD().map((item)=> {
    return ()=> dispatch(item())
  })
  
  return Object.assign({}, {preload}, bindActionCreators(CartActionCreators, dispatch))
}

export interface ICartWidgetState {
}

export interface ICartWidgetProps {
  getProductsInCart():IGetProductsInCartActionCreator
  preload:any
  cart:IProduct[]
}

class CartWidget extends React.Component<ICartWidgetProps, ICartWidgetState> {
  constructor(public props:ICartWidgetProps) {
    super();

    if (typeof window != 'undefined') {
      this.props.preload.forEach((item)=> item())
    }
  }

  render() {
    return <Link to="/cart">
      <Badge
        badgeContent={this.props.cart.length}
        badgeStyle={{top: 10}}
        primary={true}>
        <ShoppingCartIcon />
      </Badge>
    </Link>
  }
}

var CartWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(CartWidget)

CartWidgetContainer['preload'] = PRELOAD

export {CartWidgetContainer}