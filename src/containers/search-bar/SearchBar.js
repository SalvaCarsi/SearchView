'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import SearchBarWrapper from '../../components/styled/SearchBarWrapper';
import TextWrapper from '../../components/styled/TextWrapper';

export class ShapesForm extends Component {

  constructor(props) {
    super(props);
    this.state = {searchText: ''};
  }

  handleChange = (event) => {
    this.setState({searchText: event.target.value});
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.searchText);
    event.preventDefault();
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

        <input type="text" value={this.state.value} onChange={this.handleChange} />

      </SearchBarWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({searchText: state.searchBarReducer.searchText});
// const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actionsCreator, dispatch)});
export default connect(mapStateToProps)(ShapesForm);