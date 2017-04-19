'use strict';

import * as actionTypes from '../../constants/ActionTypes';

function searchResultsReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_QUESTION_DETAIL_SUCCESS: return action.payload;
    default: return state;
  }
}

export default searchResultsReducer;