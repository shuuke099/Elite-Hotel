import React, { Component } from "react";
import { filterProducts , sortProducts } from "../redux/actions";
import { connect } from "react-redux";
export class Filter extends Component {
	render() {
		// console.log(this.props.filteProdcuts)
		return (
			<div className="row">
				<div className="col-md-4">0 products found.</div>
				<div className="col-md-4">
					<label>
						Order by
						<select className="form-control" value={this.props.sort} onChange={(e)=> this.props.sortProducts(this.props.filteProdcuts, e.target.value)} >
							<option value="">Select</option>
							<option value="lowestprice">Lowest to highest</option>
							<option value="highestprice">Highest to lowest</option>
						</select>
					</label>
				</div>
				<div className="col-md-4">
					<label>
						{" "}
						Filter Size
						<select className="form-control" value={this.props.size} onChange={(e) => this.props.filterProducts(this.props.products , e.target.value)}>
							<option value="">ALL</option>
							<option value="x">X</option>
							<option value="s">S</option>
							<option value="m">M</option>
							<option value="l">L</option>
							<option value="xl">XL</option>
							<option value="xxl">XXL</option>
						</select>
					</label>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		products: state.product.prodcuts,
		filteProdcuts:state.product.filterProducts,
	size:state.product.size,
		order:state.product.order
	};
};

export default connect(mapStateToProps , {filterProducts , sortProducts}) (Filter);
