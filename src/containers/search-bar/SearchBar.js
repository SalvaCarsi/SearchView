'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import SearchBarWrapper from '../../components/styled/SearchBarWrapper';
import TextWrapper from '../../components/styled/TextWrapper';

export class ShapesForm extends Component {

  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <SearchBarWrapper>
        <TextWrapper
          size={1}
          fontWeight={'bold'}
          padding={'0.1em 0.1em'}>
          Buscador de preguntas
        </TextWrapper>
      </SearchBarWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({searchText: state.searchBarReducer.searchText});
// const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actionsCreator, dispatch)});
export default connect(mapStateToProps)(ShapesForm);