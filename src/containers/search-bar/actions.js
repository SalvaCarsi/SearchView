'use strict';

import axios from 'axios';

import constants from '../../constants';

export function searchQuestion(text) {
  const request = axios.get(`http://localhost:8000/questions?title=%${text}%&operator=LIKE`);
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: constants.actionTypes.SEARCH_QUESTIONS_SUCCESS,
        payload: response.data
      })
    });
  };
}