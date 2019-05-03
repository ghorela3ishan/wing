import React, { Component} from "react";
import { connect } from "react-redux";
// import { FormattedMessage } from "react-intl";

class App extends Component {
    componentDidMount() {
        this.props.dispatch({type: "LOGIN_REQUEST_COMPLETE", payload: {isAuthenticated: true}});
    }
    render() {
        return(
            <div>
                <h1>Let's begin with HimSafar !!</h1>
                {/* <FormattedMessage
                    id="app.intro"
                /> */}
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