import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProduct } from "../../services/common";
import { fetchProducts } from "../../services/products/actions";
import ProductCard from "../products/ProductCard";
import PaymentSec from "../paymentSec/PaymentSec";
import  { clearCart } from "../../services/cart/actions";
import "./BuyProducts.scss"

class BuyProducts extends Component {
    state = {
        itemsTobuy: [],
        paymentStatus: false
    }
    queryParams = this.props.location.search;

    componentDidMount() {
        if(!this.props.products)
                this.props.fetchProducts();
        else {
            if(this.queryParams) {
                this.updateStateFromUrl(this.queryParams.split("=")[1])
            } else {
                this.setState({
                    itemsTobuy: this.props.cartItems
                });
            }    
        }
        
    }

    componentDidUpdate() {
        this.queryParams = this.props.location.search;
        if(!this.state.itemsTobuy.length)
            if(this.queryParams) 
                this.updateStateFromUrl(this.queryParams.split("=")[1])
    }

    updateStateFromUrl = (productId) => {
        this.setState({
            itemsTobuy: [getProduct(productId , this.props.products)]
        })
    }

    submitPayment = () => {
        this.setState((state) => {
            return {
                paymentStatus: !state.paymentStatus 
            }
        })
        this.props.clearCart();
    }

    render() {
        return (
         <>
            {this.state.itemsTobuy[0] ? 
                (
                    !this.state.paymentStatus ?
                    <div className="buyCont">
                        <div className="itemsTobuySec">
                            {this.state.itemsTobuy.map((elm) => <ProductCard {...elm} isCheckout={true}/>)}
                        </div>
                        <div className="paymentSec">
                            <PaymentSec onSubmit={this.submitPayment}/>
                        </div>
                    </div> 
                    :
                    <div> Your order has been placed</div> 
                )
                : 
                <div className="noItems">No items in your cart !</div>

            }
        </>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.productsArray,
        cartItems: state.cart.cartItems
    }
}

const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ fetchProducts, clearCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(BuyProducts);