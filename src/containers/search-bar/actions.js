'use strict';

// import Api from '../../Api';
import axios from 'axios';

export function updateSearchText(text) {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'SEARCH_RESPONSE',
        payload: response.data
      })
    });
  };
}