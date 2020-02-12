import React, { Component} from "react";
import "./infoBar.scss";


export default class InfoBar extends Component {
    render() {
        return (
            <div className="infoCont">
                    {this.props.children}
                    {/* <p>Oops! No items in your cart. Find some amazing pictures 
                        <Link to="/"  className="link"> here </Link>
                            and add them to your 
                        <Link to="/buyProducts" className="link"> Cart</Link>
                    </p> */}
                </div>
        );
    }
}