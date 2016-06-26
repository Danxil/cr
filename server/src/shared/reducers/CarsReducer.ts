import * as Immutable from 'immutable'
import {ICreateCarAction, IDeleteCarAction, ICar} from '../actions';

const defaultState:Immutable.List<ICar> = Immutable.List<ICar>();

export function CarsReduser(state = defaultState, action:ICreateCarAction | IDeleteCarAction) {
  switch (action.type) {
    case 'CREATE_CAR': {
      return state.concat((<ICreateCarAction>action).car)
    }

    case 'DELETE_CAR': {
      console.log('DELETE_CAR to do', (<IDeleteCarAction>action).id)

      return state
    }

    default: {
      return state
    }
  }
}