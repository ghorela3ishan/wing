import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; 
import store from "./core/Store";
import rootReducer from "./services/rootReducer";
import saga from "./services/saga";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import { IntlProvider } from "react-intl";
// import translation from "./core/Internationalization/internationalization";
import About from "./components/About"; //to be removed later. only for demo purpose


const storeMain = store.provideStore(rootReducer, saga);

ReactDOM.render(
    // <IntlProvider locale={translation.getLanguage()} messages={translation.getTransalations()}>
        <Router>
            <Switch>
                <Provider store={storeMain}>
                    <Route exact path="/" component={App} />
                    <Route exact path="/about" component={About} /> 
                </Provider>
            </Switch>
        </Router>
    // </IntlProvider>
    , document.getElementById("root"));