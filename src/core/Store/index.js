import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

class Store {
    constructor() {
        this.store = null
    }

    provideStore(rootReducer, mainSaga) {
        this.store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
        sagaMiddleware.run(mainSaga);
        return this.store;
    }
}

const store = new Store();
export default store;