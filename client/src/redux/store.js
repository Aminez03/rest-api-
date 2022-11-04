import {createStore,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer";



let devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store=createStore(userReducer,compose(applyMiddleware(thunk),devtools))