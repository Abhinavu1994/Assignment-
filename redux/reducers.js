// reducers/apiReducer.js
import {
  FETCH_API_DATA_REQUEST,
  FETCH_API_DATA_SUCCESS,
  FETCH_API_DATA_FAILURE,
} from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_API_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_API_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
