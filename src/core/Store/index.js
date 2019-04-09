import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

class Store {
    constructor() {
        this.store = null
    }

    provideStore(rootReducer, mainSaga) {
        const composeEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        this.store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
        sagaMiddleware.run(mainSaga);
        return this.store;
    }
}

const store = new Store();
export default store;