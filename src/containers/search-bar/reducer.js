'use strict';

import constants from '../../constants';

function searchBarReducer(state = {}, action) {
  switch (action.type) {
    case constants.actionTypes.SEARCH_QUESTIONS_SUCCESS: return action.payload;
    default: return state;
  }
}

export default searchBarReducer;