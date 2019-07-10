import { combineReducers } from "redux";
import journalReducer from "./reducers/journal.reducers";
import thermometerReducer from "./reducers/thermometer.reducers";
import userReducer from  "./reducers/user.reducers";

const allRecucers = {
    journal: journalReducer,
    thermometer: thermometerReducer,
    user: userReducer
};

export const rootReducer = combineReducers(allRecucers);