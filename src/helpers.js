'use strict';

import _ from 'lodash';

/**
 * Generates a new array of the specified size. Used for rendering the shapes.
 * @param size
 * @returns {*}
 */
export default function generateArray(size = 5) {
  return _.fill(new Array(size), null)
};