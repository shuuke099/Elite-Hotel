import React, { Component } from "react";
import util from "./utlit";
import { connect } from "react-redux";

export class Product extends Component {
	render() {
		const {product , cartItems, addtoCart} = this.props;
	

	

		return (
			<div className="col-md-4 mt-3">
				<div className="thumbnail text-center">
					<a href="#">
						<img src={`/products/${product.sku}_2.jpg`} alt="" />
						<p>{product.title}</p>
					</a>
					<b>{util.formatCurrency(product.price)}</b>
					<button
						className="btn btn-info mt-0"
						onClick={() => addtoCart(cartItems, product)
						}
					>
						Add to cart
					</button>
				</div>
			</div>
		);
	}
}


export default Product;

// 