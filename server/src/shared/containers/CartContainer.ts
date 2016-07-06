import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {CartActionCreators} from '../actions'
import {Cart} from '../components/Cart'

function mapStateToProps(state) {
  return {cart: state.market.cart}
}

function mapDispatchToProps(dispatch) {
  
  return Object.assign({}, bindActionCreators(CartActionCreators, dispatch))
}

var CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer