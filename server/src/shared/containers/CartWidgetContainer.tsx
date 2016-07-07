import * as React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {CartActionCreators, IGetProductsInCartActionCreator} from '../actions/CartActions'
import {IProduct} from '../../models/Product';

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
    return <div>
      <strong>Cart widget !1111111111</strong>
      Cart length: {this.props.cart.length}
    </div>
  }
}

var CartWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(CartWidget)

CartWidgetContainer['preload'] = PRELOAD

export {CartWidgetContainer}