import { combineReducers } from "redux";
import auth from "./auth";
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
//import {    adminReducer,} from 'admin-on-rest';

export default combineReducers({ auth, routing: routerReducer, });
