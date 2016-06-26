export * from './CarsActions';

export interface IActionBase {
  type:string
}

export interface IActionCreatorBase {
  (...args:any[]):IActionBase
}

