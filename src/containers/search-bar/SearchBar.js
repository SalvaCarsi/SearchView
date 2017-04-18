'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBarWrapper from '../../components/styled/SearchBarWrapper';
import TextWrapper from '../../components/styled/TextWrapper';
import Button from '../../components/styled/Button';
import InputWrapper from '../../components/styled/InputWrapper';

import * as actionsCreator from './actions';

export class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {searchText: ''};
  }

  handleChange = (event) => {
    this.setState({searchText: event.target.value});
  };

  handleSubmit = () => {
    this.props.actions.searchQuestion(this.state.searchText);
  };

  render = () => {
    return (
      <SearchBarWrapper>
        <TextWrapper
          size={1}
          fontWeight={'bold'}
          padding={'0.1em 0.1em'}>
          Buscador de preguntas
        </TextWrapper>

        <InputWrapper value={this.state.value} onChange={this.handleChange} />
        <Button onClick={this.handleSubmit}>Buscar</Button>

      </SearchBarWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({searchText: state.searchBarReducer.searchText});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actionsCreator, dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);