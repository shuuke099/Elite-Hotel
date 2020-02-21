import {createStore , applyMiddleware , compose} from "redux";
import rootReducer from "../redux/reducer"
import thunk from "redux-thunk";
const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE || compose;
export default createStore(rootReducer,initialState, composeEnhancer(applyMiddleware(thunk)))
