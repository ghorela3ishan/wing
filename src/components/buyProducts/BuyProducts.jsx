import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProduct } from "../../services/common";
import { fetchProducts } from "../../services/products/actions";
import ProductCard from "../products/ProductCard";
import PaymentSec from "../paymentSec/PaymentSec";
import  { clearCart } from "../../services/cart/actions";
import { Link } from "react-router-dom";
import "./BuyProducts.scss"
import InfoBar from "../shared/infoBar/InfoBar";

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
                            <p className="cartHeading">Items in your cart</p>
                            {this.state.itemsTobuy.map((elm) => <ProductCard {...elm} isCheckout={true}/>)}
                        </div>
                        <div className="paymentSec">
                            <p className="paymentHeading">Let's complete your payment</p>
                            <PaymentSec onSubmit={this.submitPayment}/>
                        </div>
                    </div> 
                    :
                    <InfoBar>
                        <p> Your order has been placed. You can browse more <Link to="/"  className="link"> here </Link></p>
                    </InfoBar> 
                )
                : 
                    <InfoBar>
                       <p>Oops! No items in your cart. Find some amazing pictures 
                         <Link to="/"  className="link"> here </Link>
                             and add them to your 
                         <Link to="/buyProducts" className="link"> Cart</Link>
                     </p> 
                    </InfoBar>
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