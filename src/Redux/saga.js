import { all } from "redux-saga/effects";
import { journalSaga } from "./sagas/journal.saga";
import { thermometerSaga } from "./sagas/thermometer.saga";
import { userSaga } from "./sagas/user.saga";

export function* rootSaga() {
    yield all([
        journalSaga(),
        thermometerSaga(),
        userSaga()
    ])
}