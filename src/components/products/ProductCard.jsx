import React, { Component } from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom"

export default class ProductCard extends Component {
    render() {
        let  { src, description, price, isCheckout } = this.props;
        let imgClass ="imageCont";
        let descripClass = "descripCont";
        if (isCheckout) {
            imgClass = "buyImageCont";
            descripClass = "buyDescripCont"
        }
        return (
            <Link to={"details/".concat(price)}>
                <div className="product">
                    <img src={src} alt="Product Image" className={imgClass}/>
                    <div className={descripClass}>{description}</div>
                    <div className="priceCont">{price}</div>
                </div>
            </Link>
        );
    }
}