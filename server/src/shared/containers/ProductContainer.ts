import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ProductsActionCreators} from '../actions'
import {Product, IProductProps, IProductState} from '../components/Product'

function mapStateToProps(state):IProductState {
  return {product: state.products[0]}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProductsActionCreators, dispatch)
}
const container = connect(mapStateToProps, mapDispatchToProps)(Product)

export default container