import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; 
import store from "./core/Store";
import rootReducer from "./services/rootReducer";
import saga from "./services/saga";

const storeMain = store.provideStore(rootReducer, saga);

ReactDOM.render(
    <Provider store={storeMain}>
        <App/>
    </Provider>
    , document.getElementById("root"));