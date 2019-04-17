import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; 
import store from "./core/Store";
import rootReducer from "./services/rootReducer";
import saga from "./services/saga";
// import { IntlProvider } from "react-intl";
// import translation from "./core/Internationalization/internationalization";


const storeMain = store.provideStore(rootReducer, saga);

ReactDOM.render(
    // <IntlProvider locale={translation.getLanguage()} messages={translation.getTransalations()}>
        <Provider store={storeMain}>
            <App/>
        </Provider>
    // </IntlProvider>
    , document.getElementById("root"));