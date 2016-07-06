import {IGetProductsAction} from '../actions';
import {IProduct} from '../../models/Product';
import * as _ from 'lodash';

const defaultState:IProduct[] = [];

export function CartReducer(state = defaultState, action:any) {
  switch (action.type) {
    case 'GET_PRODUCTS_IN_CART_SUCCESS': {
      let products:IProduct[] = action.result

      return _.unionBy(state, products, 'id')
    }

    case 'REMOVE_PRODUCT_FROM_CART_SUCCESS': {
      let products:IProduct[] = action.result

      return [].concat(products)
    }

    case 'ADD_PRODUCT_TO_CART_SUCCESS': {
      let products:IProduct[] = action.result

      return [].concat(products)
    }

    default: {
      return state
    }
  }
}