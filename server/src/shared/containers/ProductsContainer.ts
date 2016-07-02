import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ProductsActionCreators} from '../actions'
import {Products, IProductsProps, IProductsState} from '../components/Products'

function mapStateToProps(state):IProductsState {
  return {products: state.products}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProductsActionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)