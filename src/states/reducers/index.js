import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import { loaderReducer } from './loaderReducer';

export const reducers = combineReducers({
    userData:loginReducer,
    loader: loaderReducer
})