'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchResultsWrapper from '../../components/styled/SearchResultsWrapper';
import ResultsCounter from './ResultsCounter';

export class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <SearchResultsWrapper>
        <ResultsCounter resultsSize={_.isNil(this.props.results.length)?0:this.props.results.length}/>
      </SearchResultsWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({results: state.searchBarReducer});
export default connect(mapStateToProps)(SearchResults);