// store.js
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // for async actions
import rootReducer from './index';

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
