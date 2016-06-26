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

export class CarsActionCreator {
  static createCar:baseActionCreator.IActionCreatorBase = (car:ICar):ICreateCarAction => {
    return {
      type: 'CREATE_CAR',
      car
    }
  }

  static deleteCar:baseActionCreator.IActionCreatorBase = (id:string):IDeleteCarAction => {
    return {
      type: 'DELETE_CAR',
      id
    }
  }
}