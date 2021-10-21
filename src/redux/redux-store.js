import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    auth: authReducer
})


const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;