import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducer";
import { rootSaga } from "./saga";

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    let store;

    if (process.env.NODE_ENV === "production") {
        store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
    } else {
        store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    }

    sagaMiddleware.run(rootSaga);

    return store;
}