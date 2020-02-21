import { ADD_TOCART , REMOVE_FROM_CART , CLEAR_CART} from "../actions/type";

const initialstate = {
  cartItems:[]
}
export const cartReducer = (state = initialstate , action) => {
  switch(action.type) {
    case ADD_TOCART:
      return {
        ...state,
        cartItems:action.payload.cartItems
      }
      case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems:action.payload.cartItems
      }
      case CLEAR_CART:
      return {
        ...state,
        cartItems:action.payload.cartItems
      }
    default:
      return state;
  }
}