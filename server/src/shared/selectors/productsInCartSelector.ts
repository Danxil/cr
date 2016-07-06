import {createSelector} from 'reselect'
import {IProduct} from "../../models/Product";

export const productsInCartSelector = createSelector(
  (state:any)=> {
    return state.products
  },
  (state:any)=> {
    return state.cart
  },
  (products:IProduct[], cart:IProduct[]) => {
    return products.filter((product)=> {
      return !cart.find((cartProduct)=> product.id == cartProduct.id)
    })
  }
)