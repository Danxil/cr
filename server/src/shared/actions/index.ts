export * from './ProductsActions';
export * from './CartActions';

export interface IActionBase {
  type:string
}

export interface IActionCreatorBase {
  (...args:any[]):IActionBase
}

