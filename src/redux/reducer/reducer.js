import { LOAD_PRODUCTS , FILTER_PRODUCTS , FILTER_PRODUCTS_BY_SORT} from "../actions/type";
const initialState = {
  prodcuts:[],
  size:"",
  filterProducts:[],
  sort:""
}
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return{
        ...state,
        prodcuts:action.products,
        filterProducts:action.products
      }
      break;
    case FILTER_PRODUCTS:
      return{
        ...state,
        size:action.payload.size,
        filterProducts:action.payload.filteredProducts
      }
      break;
    case FILTER_PRODUCTS_BY_SORT:
      return{
        ...state,
        sort:action.sort,
        filterProducts:action.Sortedproducts
      }
      break;
    default:
      return state
  }
}