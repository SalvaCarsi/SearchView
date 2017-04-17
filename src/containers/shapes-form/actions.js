'use strict';

export function updateShape(shape) {
  return {
    type: shape,
    payload: {
      currentShape: shape
    }
  }
}