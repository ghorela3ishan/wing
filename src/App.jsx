import React, { Component} from "react";
import { connect } from "react-redux";
// import { FormattedMessage } from "react-intl";

class App extends Component {
    componentDidMount() {
        console.log('env',process.env.NODE_ENV)
        this.props.dispatch({type: "LOGIN_REQUEST_COMPLETE", payload: {isAuthenticated: true}});
    }
    render() {
        return(
            <div>
                <h1>Hey, you are ready to create your first react app without CRA</h1>
                <p>
                    This project is a boiler plate for the react app. You can start building your 
                    app by creating custom Components in the src/components folder. 
                    Use command "npm run start" to run the project on local dev server.
                </p>
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