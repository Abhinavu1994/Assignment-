// actions/apiActions.js
import axios from 'axios';

export const FETCH_API_DATA_REQUEST = 'FETCH_API_DATA_REQUEST';
export const FETCH_API_DATA_SUCCESS = 'FETCH_API_DATA_SUCCESS';
export const FETCH_API_DATA_FAILURE = 'FETCH_API_DATA_FAILURE';

const apiUrl = 'https://api.publicapis.org/entries';

export const fetchApiData = () => {
  return dispatch => {
    dispatch({type: FETCH_API_DATA_REQUEST});

    axios
      .get(apiUrl)
      .then(response => {
        dispatch({type: FETCH_API_DATA_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({type: FETCH_API_DATA_FAILURE, payload: error.message});
      });
  };
};
