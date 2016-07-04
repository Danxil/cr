import {ICreateProductAction, IDeleteProductAction, IGetProductsSuccessAction} from '../actions';
import {IProduct} from '../../models/Product';
import * as _ from 'lodash';

const defaultState:IProduct[] = [];

export function ProductsReducer(state = defaultState, action:any) {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS': {
      let products:IProduct[] = (<IGetProductsSuccessAction>action).result

      return _.unionBy(state, products, 'id')
    }

    case 'CREATE_PRODUCT': {
      return [].concat(state, (<ICreateProductAction>action).product)
    }

    case 'DELETE_PRODUCT': {
      console.log('DELETE_PRODUCT to do', (<IDeleteProductAction>action).productId)

      return state
    }

    default: {
      return state
    }
  }
}