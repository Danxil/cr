import {ProductsAPI} from './ProductsAPI'
import {CartAPI} from './CartAPI'

const PREFIX = 'http://localhost:5000/api'

var productsAPI = ProductsAPI.getInstance(PREFIX)
var cartAPI = CartAPI.getInstance(PREFIX)

export {productsAPI};
export {cartAPI}