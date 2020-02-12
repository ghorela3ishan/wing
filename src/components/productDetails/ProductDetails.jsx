import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToCart } from "../../services/cart/actions";
import { getProduct } from "../../services/common";
import { fetchProducts } from "../../services/products/actions";
import { Link } from "react-router-dom";
import "./ProductDetails.scss";


class ProductDetails extends Component {

    componentDidMount() {
        if(!this.props.products)
            this.props.fetchProducts();
    }

    addToCartBtnAttrs() {
        if(getProduct(this.props.match.params.productId, this.props.cartItems) != undefined) {
            return {text: "Added To Cart", btnClass: "added"};
        }
        return {text: "Add To Cart", btnClass: "add"};
    }

    render() {
        let product = {};
        if(this.props.products) {
             product = getProduct(this.props.match.params.productId, this.props.products); 
        
        }
        let { btnClass, text } = this.addToCartBtnAttrs();
        let toAttrs = {
            pathname: "/buyProducts",
            search: "?id=".concat(product.price)
        }
        return (
            <div className="productDetails">
                    <div className="imgSec">
                        <img src={product.src} alt="Product Image" className="imageCont"/>
                    </div>
                    <div className="infoSec">
                        <div className="descripCont">{product.description}</div>
                        <div className="priceCont">₹ {product.cost}</div>
                        <div className="btnCont buyNow">
                            <Link className="buyBtn" to={toAttrs}>Buy Now</Link>
                        </div>
                        <div className="btnCont addToCart">
                            <input className={btnClass} type="button" onClick={() => {this.props.addToCart(product)}} value={text}/>
                        </div>
                    </div>
                </div>
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
    return bindActionCreators({addToCart, fetchProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(ProductDetails);