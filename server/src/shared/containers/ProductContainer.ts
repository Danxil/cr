import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Product} from '../components/Product'
import {CartActionCreators} from '../actions'
import {IProduct} from '../../models/Product';

export interface IProductContainerOwnProps {
  product:IProduct
}

function mapStateToProps(state, ownProps:IProductContainerOwnProps) {
  return {product: ownProps.product}
}

function mapDispatchToProps(dispatch, ownProps:IProductContainerOwnProps) {
  var addProductToCart = CartActionCreators.addProductToCart.bind(this, ownProps.product.id)

  return Object.assign({}, bindActionCreators({addProductToCart}, dispatch))
}

var ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product)

export default ProductContainer