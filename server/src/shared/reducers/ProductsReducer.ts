import * as Immutable from 'immutable'
import {ICreateProductAction, IDeleteProductAction, IProduct} from '../actions';

const defaultState:Immutable.List<IProduct> = Immutable.List<IProduct>();

export function ProductsReducer(state = defaultState, action:ICreateProductAction | IDeleteProductAction) {
  switch (action.type) {
    case 'CREATE_PRODUCT': {
      return state.concat((<ICreateProductAction>action).product)
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