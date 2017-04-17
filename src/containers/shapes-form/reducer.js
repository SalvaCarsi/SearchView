'use strict';

import shapeOptions from '../../constants';

function shapeReducer(state = {currentShape: ''}, action) {
  switch (action.type) {
    case shapeOptions.square: return action.payload;
    case shapeOptions.diamond: return action.payload;
    default: return state
  }
}

export default shapeReducer;