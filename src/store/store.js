//@ flow
import { createStore, applyMiddleware } from "redux";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from "../reducers/rootReducer.js";

const client = axios.create({
    baseURL: 'http://localhost:53909/api',
    responseType: 'json'
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

export default store;