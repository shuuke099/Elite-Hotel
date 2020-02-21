import { combineReducers } from "redux";
import { ProductReducer } from "./reducer";
import { cartReducer } from "./CartReducer";

export default combineReducers({
	product:ProductReducer,
	cart:cartReducer
})