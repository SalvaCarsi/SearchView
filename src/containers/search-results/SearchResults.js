'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchResultsWrapper from '../../components/styled/SearchResultsWrapper';

export class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    console.log(this.props.results);
    return (
      <SearchResultsWrapper>
        Se han encontrado X resultados
      </SearchResultsWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({results: state.searchBarReducer});
export default connect(mapStateToProps)(SearchResults);