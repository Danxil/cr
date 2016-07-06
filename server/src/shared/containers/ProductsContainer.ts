import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ProductsActionCreators} from '../actions'
import {Products} from '../components/Products'
import {productsInCartSelector} from '../selectors/productsInCartSelector'

var PRELOAD = (params?, query?)=> {
  return [
    ProductsActionCreators.getProducts
  ]
}

function mapStateToProps(state) {
  return {products: productsInCartSelector(state.market)}
}

function mapDispatchToProps(dispatch) {
  var preload = PRELOAD().map((item)=> {
    return ()=> dispatch(item())
  })
  
  return Object.assign({}, {preload}, bindActionCreators(ProductsActionCreators, dispatch))
}

var ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

ProductsContainer['preload'] = PRELOAD

export default ProductsContainer