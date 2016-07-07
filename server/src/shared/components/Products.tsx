import * as React from 'react';
import {
  ICreateProductActionCreator, IDeleteProductActionCreator, IGetProductsActionCreator
} from '../actions/ProductsActions';
import {IProduct} from '../../models/Product';
import {RouteComponentProps} from 'react-router';
import ProductContainer from '../containers/ProductContainer';
import {IProductWrapper} from '../selectors/productsInCartSelector';

interface IProductRouteParams {
}

export interface IProductsState {
}

export interface IProductsProps extends RouteComponentProps<IProductRouteParams, any> {
  productWrappers:IProductWrapper[]
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
    var {productWrappers} = this.props

    return (
      <div>
        <strong>Products !1111111111</strong>
        <ul>
          {productWrappers.map((productWrapper:IProductWrapper)=>{
            return <li key={productWrapper.product.id}>
              <ProductContainer inCart={productWrapper.inCart} product={productWrapper.product} />
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Products
