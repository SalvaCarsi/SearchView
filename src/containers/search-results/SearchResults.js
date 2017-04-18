'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchResultsWrapper from '../../components/styled/SearchResultsWrapper';
import ResultsCounter from './ResultsCounter';
import ResultsList from './ResultsList';

export class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  getResultsSize = () => _.isNil(this.props.results.length)?0:this.props.results.length;

  render = () => {
    return (
      <SearchResultsWrapper>
        <ResultsCounter resultsSize={this.getResultsSize()} />
        {this.getResultsSize() ? <ResultsList results={this.props.results} /> : null }
      </SearchResultsWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({results: state.searchBarReducer});
export default connect(mapStateToProps)(SearchResults);