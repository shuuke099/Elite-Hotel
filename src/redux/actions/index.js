import { LOAD_PRODUCTS, FILTER_PRODUCTS , FILTER_PRODUCTS_BY_SORT} from "./type";

export const loadProducts = storeProducts => dispatch => {
	return dispatch({
		type: LOAD_PRODUCTS,
		products: storeProducts
	});
};

export const filterProducts = (products, size) => dispatch => {
	return dispatch({
		type: FILTER_PRODUCTS,
		payload: {
			size: size,
			filteredProducts:
				size === ""
					? products
					: products.filter(product =>
							product.availableSizes.indexOf(size.toUpperCase())>=0
					  )
		}
	});
};

export const sortProducts = (products , sort) =>(dispatch) => {
const items = [...products]
if(sort !==""){
	items.sort((a,b) => (sort === 'lowestprice') ?
	(a.price > b.price ? 1: -1 ) :
	(a.price < b.price ? 1: -1 ))
} else {
	items.sort((a,b)=>(a.id > b.id ? 1 : -1))
}
return dispatch({
	type:FILTER_PRODUCTS_BY_SORT,
	sort:sort,
	Sortedproducts:items
})
}
