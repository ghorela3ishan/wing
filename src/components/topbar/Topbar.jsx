import React, { Component} from "react";
import "./Topbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Topbar extends Component {
    render() {
        let cartTotalItems = this.props.cartItems.length;
        return (
            <div className="topbar">
                <Link to="" className="title">
                    <span className="myTravel">My travel</span>
                    <span className="store">Store</span>
                    <span className="bottomLine"> ( Buy travel pictures )</span>
                </Link>
                <Link to="/"  className="productsLinkCont linkcont">Products</Link>
                <Link to="/buyProducts"className="cartLinkCont linkcont">Cart 
                    <span className={cartTotalItems ? "cartNotifications" : "noCartNotification"}> {cartTotalItems}</span>
                </Link>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(Topbar);