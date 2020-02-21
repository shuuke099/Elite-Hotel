import React, { Component } from 'react'
import { connect } from "react-redux";
import util from "./utlit"
import { removeItem , clearCart} from '../redux/actions/CartActions';

export class Card extends Component {
  render() {
    const {cartItems} = this.props
    // console.log(cartItems.length);
    
    return (
      <div className="alert alert-info">
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>|
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={() => this.props.removeItem(cartItems , item.id)
                                        }>X</button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <div className="d-md-flex">
                          <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary">checkout</button>
                          <button onClick={() =>this.props.clearCart(cartItems)} className="btn btn-danger ml-2">Clear</button>
                        </div>
                        
                    </div>
                }
            </div>
    )
  }
}
const mapStateToprops = state => {
	return {
		cartItems:state.cart.cartItems
	}
}
export default connect(mapStateToprops, {removeItem , clearCart})(Card);
