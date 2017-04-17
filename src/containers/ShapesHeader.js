'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderWrapper from '../components/styled/HeaderWrapper';
import TextWrapper from '../components/styled/TextWrapper';

import shapeOptions from '../constants';

export class ShapesHeader extends Component {

  renderCurrentShapeLabel = () => {
    switch (this.props.currentShape) {
      case shapeOptions.square: return 'Square';
      case shapeOptions.diamond: return 'Diamond';
      default: return 'Current Shapes';
    }
  };

  render = () => {
    return (
      <HeaderWrapper>
        <TextWrapper
          size={1.8}
          fontWeight={'bold'}
          padding={'0.1em 0.1em'}>
            Geometric shapes
        </TextWrapper>
        <TextWrapper
          size={1}
          fontWeight={'normal'}
          padding={'0.0em 0.1em 1.2em 0.1em'}>
          {this.renderCurrentShapeLabel()}
        </TextWrapper>
      </HeaderWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({currentShape: state.shapeReducer.currentShape});

export default connect(mapStateToProps)(ShapesHeader)