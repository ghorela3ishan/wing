import { takeLatest, call, put } from "redux-saga/effects";
import { loginActions } from "./sessionActionConstants"; 
import sessionRequest from "./sessionApi"; 

export default function* sessionSaga() {
    yield takeLatest(loginActions.LOGIN_REQUEST_START, createSessionRequest); 
}

function* createSessionRequest(loginData) {
    try {
        const result = yield call(sessionRequest(loginData));
        yield put({type: loginActions.LOGIN_REQUEST_COMPLETE, payload: {isAuthenticated: true }});
    } catch(e) {
        yield put({type: loginActions.LOGIN_REQUEST_FAIL, payload: {isAuthenticated: false }});
    }
}