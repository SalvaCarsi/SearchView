'use strict';

import axios from 'axios';

import * as actionTypes from '../../constants/ActionTypes';

export function searchQuestion(text) {
  const request = axios.get(`http://localhost:8000/questions?title=%${text}%&operator=LIKE`);
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionTypes.SEARCH_QUESTIONS_SUCCESS,
        payload: response.data
      })
    });
  };
}