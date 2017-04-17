'use strict';

export function updateSearchText(text) {
  return {
    type: text,
    payload: {
      currentShape: text
    }
  }
}