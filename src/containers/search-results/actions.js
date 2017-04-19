'use strict';

import axios from 'axios';

import * as actionTypes from '../../constants/ActionTypes';

export function fetchQuestion(answerId) {
  const request = axios.get(`http://localhost:8000/questions/${answerId}`);
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionTypes.FETCH_QUESTION_DETAIL_SUCCESS,
        payload: response.data
      })
    });
  };
}