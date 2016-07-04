import * as React from 'react';
import {
  ICreateProductActionCreator, IDeleteProductActionCreator, IGetProductsActionCreator
} from '../actions/ProductsActions';
import {IProduct} from '../../models/Product';
import {RouteComponentProps} from 'react-router';
import ProductContainer from '../containers/ProductContainer';

interface IProductRouteParams {
}

export interface IProductsState {
}

export interface IProductsProps extends RouteComponentProps<IProductRouteParams, any> {
  products:IProduct[]
  getProducts:IGetProductsActionCreator
  createProduct:ICreateProductActionCreator
  deleteProduct:IDeleteProductActionCreator
  preload:any
}

export class Products extends React.Component<IProductsProps, IProductsState> {
  constructor(public props:IProductsProps) {
    super()

    if (typeof window != 'undefined') {
      this.props.preload.forEach((item)=> item())
    }
  }

  render() {
    var {products} = this.props

    return (
      <div>
        <strong>Products !1111111111</strong>
        <ul>
          {products.map((product:IProduct)=>{
            return <li key={product.id}>
              <ProductContainer product={product} />
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Products
