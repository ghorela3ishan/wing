import React, { Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
// import { FormattedMessage } from "react-intl";

class App extends Component {
    componentDidMount() {
        console.log('env',process.env.NODE_ENV)
        this.props.dispatch({type: "LOGIN_REQUEST_COMPLETE", payload: {isAuthenticated: true}});
    }
    render() {
        return(
            <div>
                <Link to="products">Products</Link>
                <Link to="cart">Cart</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sessionData: state.sessionData
    }
}


export default connect(mapStateToProps)(App);