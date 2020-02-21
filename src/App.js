import React, { Component } from 'react'
import ProdcutList from "./components/ProdcutList";
import Filter from "./components/Filter";
import Card from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
export class App extends Component {
	
	render() {
		
		return (
			<>
			<div className="container bg-secondary">
				<h1>E-commerce Shopping Cart Application</h1>
				<hr />
				<div className="row">
					<div className="col-md-9">
						<Filter />
						<hr />
						<ProdcutList/>
					</div>
					<div className="col-md-3">
						<Card />
					</div>
				</div>
			</div>
		</>
		)
	}
}

export default (App)
