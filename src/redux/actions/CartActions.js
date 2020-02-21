import { ADD_TOCART , REMOVE_FROM_CART , CLEAR_CART } from "./type";
export const AddToCart = (items , product) => (dispatch) => {
  let cartItems = [...items]
 let itemIncart = false;
 cartItems.forEach(item => {
   if(item.id === product.id){
    itemIncart = true;
    item.count++;
   }
 });
 if(!itemIncart){
  cartItems.push({...product , count: 1})
 }
console.log(cartItems);

return dispatch({
  type:ADD_TOCART,
  payload: {
    cartItems:cartItems
  }
 
})

}

export const removeItem = (items , id) => (dispatch) => {
  let cartItems = [...items].filter(item => item.id !==id)
return dispatch({
  type:REMOVE_FROM_CART,
  payload: {
    cartItems:cartItems
  }
 
})
}
export const clearCart = () => (dispatch) => {
return dispatch({
  type:CLEAR_CART,
  payload: {
    cartItems:[]
  }
 
})

}

