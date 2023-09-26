// reducers/index.js
import {combineReducers} from 'redux';
import apiReducer from './reducers';

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;
