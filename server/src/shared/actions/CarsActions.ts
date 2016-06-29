import * as baseActionCreator from './index'

export interface ICar {
  model:string
}

export interface ICreateCarAction extends baseActionCreator.IActionBase {
  type:string
  car:ICar
}

export interface IDeleteCarAction extends baseActionCreator.IActionBase {
  type:string
  id:string
}

export namespace CarsActionCreators {
  export function createCar(car:ICar):ICreateCarAction {
    return {
      type: 'CREATE_CAR',
      car
    }
  }

  export function deleteCar(id:string):IDeleteCarAction {
    return {
      type: 'DELETE_CAR',
      id
    }
  }
}