'use strict';

function searchBarReducer(state = {results: ''}, action) {
  console.log(`action type ${action.type}`);
  switch (action.type) {
    case 'SEARCH_RESPONSE': return action.payload;
    default: return state;
  }
}

export default searchBarReducer;