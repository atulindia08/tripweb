import {reducers} from "./reducers/index";
import {applyMiddleware, createStore} from 'redux';
import {thunk} from 'redux-thunk'

 const store = createStore(reducers, {}, applyMiddleware(thunk));

 export default store