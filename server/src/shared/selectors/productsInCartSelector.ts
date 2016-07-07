import {createSelector} from 'reselect'
import {IProduct} from "../../models/Product";

export interface IProductWrapper {
  product:IProduct
  inCart:boolean
}

export const productsInCartSelector = createSelector(
  (state:any)=> {
    return state.products
  },
  (state:any)=> {
    return state.cart
  },
  (products:IProduct[], cart:IProduct[]):IProductWrapper[] => {
    return products.map((product)=> {
      var inCart = !!cart.find((cartProduct)=> product.id == cartProduct.id)

      return {
        product,
        inCart
      }
    })
  }
)