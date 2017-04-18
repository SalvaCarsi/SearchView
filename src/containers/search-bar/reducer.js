'use strict';

import * as actionTypes from '../../constants/ActionTypes';

function searchBarReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.SEARCH_QUESTIONS_SUCCESS: return action.payload;
    default: return state;
  }
}

export default searchBarReducer;