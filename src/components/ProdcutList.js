import React, { Component } from "react";
import Product from "./Product";
import { storeProducts } from "../data";
import { loadProducts } from "../redux/actions";
import { AddToCart } from "../redux/actions/CartActions";
import { connect } from "react-redux";
class ProdcutList extends Component {
	componentDidMount() {
		this.props.loadProducts(storeProducts);
	}
	addtoCart = (cartItems , product) => {
		this.props.AddToCart(cartItems , product)
	}
	render() {
		const { products , cartItems} = this.props;
		return (
			<>
				<div className="row">
					{products.map(product => (
						<Product key={product.id} product={product} cartItems={cartItems} addtoCart={this.addtoCart}/>
					))}
				</div>
			</>
		);
	}
}



const mapStateToProps = state => {
	return {
		products: state.product.filterProducts,
		cartItems: state.cart.cartItems
	};
};

export default connect(mapStateToProps,{ loadProducts , AddToCart})(ProdcutList);
