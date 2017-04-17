'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import HeaderWrapper from '../../components/styled/HeaderWrapper';
import TextWrapper from '../../components/styled/TextWrapper';

export class ShapesForm extends Component {

  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <HeaderWrapper>
        <TextWrapper
          size={1.8}
          fontWeight={'bold'}
          padding={'0.1em 0.1em'}>
          Search!
        </TextWrapper>
      </HeaderWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({searchText: state.searchBarReducer.searchText});
// const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actionsCreator, dispatch)});
export default connect(mapStateToProps)(ShapesForm);