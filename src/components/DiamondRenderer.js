'use strict';

import React, { Component } from 'react';
import _ from 'lodash';

import {SmallCircle} from './styled/Circle';
import MarginWrapper from './styled/MarginWrapper';
import TableWrapper from './styled/TableWrapper';

import generateArray from '../helpers';

export class DiamondRenderer extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * Helper function to transform an array into another array whose components are of type CircleSmall.
   * Adds a different key to the components to follow the React dom build rules.
   * @param value
   * @param index
   */
  toCircleSmallWithKey = (value, index) => <SmallCircle key={index} delay={index+1}/>;

  /**
   * Creates as many circles as needed increasingly until it reaches the middle of the diamond, then it prints
   * as many circles as needed decreasingly until it reaches the end of the diamond
   * @param diamondWidth
   * @param diamondHeight
   * @param index
   */
  renderDiamondElements = (diamondWidth, diamondHeight, index) => {
    if (index + 1 <=  diamondWidth) return generateArray(index + 1).map(this.toCircleSmallWithKey);
    else return generateArray(diamondHeight - index).map(this.toCircleSmallWithKey);
  };

  /**
   * Helper method to deal with the table, rows and columns creation.
   * @returns {XML}
   */
  renderDiamond = () => {
    // Here I set the value for the diamondWidth, this should be the value used all around the component instead of
    // accessing it through the props. It makes the code more explicit and clear.
    const diamondWidth = _.isNil(this.props.shapeSize) ? 5 : this.props.shapeSize;
    const diamondHeight = (diamondWidth*2)-1;
    return (
      <TableWrapper>
        <tbody>
        {
          generateArray(diamondHeight).map( (value, index) => {
            return (
              <tr key={index}>
                <td key={index}>
                  {this.renderDiamondElements(diamondWidth, diamondHeight, index)}
                </td>
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
      <MarginWrapper>{this.renderDiamond()}</MarginWrapper>
    );
  }

}

DiamondRenderer.propTypes = {
  shapeSize: React.PropTypes.string
};

export default  DiamondRenderer;