'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormWrapper from '../../components/styled/FormWrapper';
import MarginWrapper from '../../components/styled/MarginWrapper';
import {Button, ActiveButton} from '../../components/styled/Button';
import SquareRenderer from '../../components/SquareRenderer';
import DiamondRenderer from '../../components/DiamondRenderer';

import shapeOptions from '../../constants';

import * as actionsCreator from './actions';

export class ShapesForm extends Component {

  constructor(props) {
    super(props);
  }

  onClickSquareButton = () => {
    this.props.actions.updateShape(shapeOptions.square);
  };

  onClickDiamondButton = () => {
    this.props.actions.updateShape(shapeOptions.diamond);
  };

  renderShape = () => {
    switch(this.props.currentShape){
      case shapeOptions.square:
        return <SquareRenderer/>;
      case shapeOptions.diamond:
        return <DiamondRenderer/>;
      default:
        return null
    }
  };

  /**
   * Helper methods to keep the button active based on the state. See renderButtons
   */
  squareIsActive = () => <ActiveButton onClick={this.onClickSquareButton}>Square</ActiveButton>;
  squareIsNotActive = () => <Button onClick={this.onClickSquareButton}>Square</Button>;
  diamondIsActive = () => <ActiveButton onClick={this.onClickDiamondButton()}>Diamond</ActiveButton>;
  diamondIsNotActive = () => <Button onClick={this.onClickDiamondButton}>Diamond</Button>;

  renderButtons = () => {
    return (
      <MarginWrapper>
        { this.props.currentShape === shapeOptions.square ? this.squareIsActive() : this.squareIsNotActive() }
        { this.props.currentShape === shapeOptions.diamond ? this.diamondIsActive() : this.diamondIsNotActive() }
      </MarginWrapper>
    );
  };

  render = () => {
    return (
      <FormWrapper>
        {this.renderButtons()}
        {this.renderShape()}
      </FormWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({currentShape: state.shapeReducer.currentShape});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actionsCreator, dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(ShapesForm);