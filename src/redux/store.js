import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
// we can determine the prev state and next state with the help of logger

import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk];

if(process.env.NODE_ENV === "development"){
    middleware.push(logger)
}

export const store = createStore(rootReducer,applyMiddleware(...middleware));