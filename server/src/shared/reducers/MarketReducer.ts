import {IProduct} from '../../models/Product';
import {CartReducer} from './CartReducer'
import {ProductsReducer} from './ProductsReducer'

interface IMarketReducerState {
  products: IProduct[]
  cart: IProduct[]
}

const defaultState:IMarketReducerState = {
  products: [],
  cart: []
};

export function MarketReducer(state = defaultState, action:any) {
  switch (action.type) {
    case 'GET_PRODUCTS_IN_CART_SUCCESS':
    case 'REMOVE_PRODUCT_FROM_CART_SUCCESS':
    case 'ADD_PRODUCT_TO_CART_SUCCESS': {
      return Object.assign({}, state, {cart: CartReducer(state.cart, action)})
    }

    case 'GET_PRODUCTS_SUCCESS':
    case 'CREATE_PRODUCT_SUCCESS':
    case 'DELETE_PRODUCT': {
      return Object.assign({}, state, {products: ProductsReducer(state.products, action)})
    }

    default: {
      return state
    }
  }
}