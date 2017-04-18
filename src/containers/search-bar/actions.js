'use strict';

import axios from 'axios';

export function searchQuestion(text) {
  const request = axios.get(`http://localhost:8000/questions?title=%${text}%&operator=LIKE`);
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'SEARCH_RESPONSE',
        payload: response.data
      })
    });
  };
}