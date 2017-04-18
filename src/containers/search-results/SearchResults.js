'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBarWrapper from '../../components/styled/SearchBarWrapper';

export class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    console.log(this.props.results);
    return (
      <SearchBarWrapper>
        Se han encontrado X resultados
      </SearchBarWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({results: state.searchBarReducer});
export default connect(mapStateToProps)(SearchResults);