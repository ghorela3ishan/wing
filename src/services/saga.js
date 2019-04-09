import sessionSaga from "./session/sessionSaga";
import { all }  from "redux-saga/effects";

export default function* rootSaga() {
    yield all([sessionSaga]);
} 