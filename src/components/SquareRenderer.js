'use strict';

import React, { Component } from 'react';
import _ from 'lodash';

import {MediumCircle} from './styled/Circle';
import MarginWrapper from './styled/MarginWrapper';
import TableWrapper from './styled/TableWrapper';

import generateArray from '../helpers';

export class SquareRenderer extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * Creates two arrays, one representing the rows and the other the cells. And then fill the cells with a Circle.
   * @returns {XML}
   */
  renderCircles = () => {
    const size = _.isNil(this.props.shapeSize) ? 5 : this.props.shapeSize;
    return (
      <TableWrapper>
        <tbody>
        {
          generateArray(size).map( (row, indexRow) => {
            return (
              <tr key={indexRow}>
                {generateArray(size).map( (cell, indexCell) => {
                  return (<td key={indexCell}><MediumCircle delay={indexCell+1}/></td>)
                })}
              </tr>
            )
          })
        }
        </tbody>
      </TableWrapper>
    );
  };

  render = () => {
    return (
      <MarginWrapper>{this.renderCircles()}</MarginWrapper>
    );
  }

}

SquareRenderer.propTypes = {
  shapeSize: React.PropTypes.string
};

export default  SquareRenderer;