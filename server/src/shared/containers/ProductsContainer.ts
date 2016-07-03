import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ProductsActionCreators} from '../actions'
import {Products, IProductsProps, IProductsState} from '../components/Products'

const PRELOAD = [
  ProductsActionCreators.getProducts
]

function mapStateToProps(state) {
  return {products: state.products}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProductsActionCreators, dispatch)
}

var container = connect(mapStateToProps, mapDispatchToProps)(Products)

export default container