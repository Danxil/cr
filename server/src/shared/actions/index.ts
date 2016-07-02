export * from './ProductsActions';

export interface IActionBase {
  type:string
}

export interface IActionCreatorBase {
  (...args:any[]):IActionBase
}

