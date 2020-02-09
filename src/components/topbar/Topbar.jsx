import React, { Component} from "react";
import "./Topbar.scss";
import { Link } from "react-router-dom";

export default class Topbar extends Component {
    render() {
        return (
            <div className="topbar">
                <Link to="" className="title">
                    <span className="myTravel">My travel</span>
                    <span className="store">Store</span>
                </Link>
                <Link to="/"  className="productsLinkCont linkcont">Products</Link>
                <Link to="/buyProducts"className="cartLinkCont linkcont">Cart</Link>
            </div>
        )
    }
}