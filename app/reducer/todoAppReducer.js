import  '../action/index';
import { combineReducers } from 'redux';
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";

const todoApp = combineReducers({todos:todoReducer,filter:filterReducer})

//暴露reducer
export default todoApp;