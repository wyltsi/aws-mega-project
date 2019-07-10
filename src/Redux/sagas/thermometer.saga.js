import axios from "axios";
import { thermometerActions } from "../actions/thermometer.actions";
import { call, put, takeLatest, all } from "redux-saga/effects";

export const setToken = () => ({
    token: "token-code-id-from-whatever"
})

export function* getThermometerData() {
    try {
        yield call(setToken.token);
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/todos");
        console.log("response is:", response);
        yield put(thermometerActions.getThermometerDataSuccess(response.data.data));
    } catch (e) {
        yield put(thermometerActions.getThermometerDataError(e));
    }
}

export function* thermometerSaga() {
    yield all([
        takeLatest("GET_THERMOMETER_DATA", getThermometerData)
    ])
}