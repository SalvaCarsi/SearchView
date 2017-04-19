'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import SearchResultsWrapper from '../../components/styled/SearchResultsWrapper';
import ResultsCounter from './ResultsCounter';
import ResultsList from './ResultsList';
import * as actionsCreator from './actions';

export class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  getResultsSize = () => _.isNil(this.props.results.length)?0:this.props.results.length;

  render = () => {
    return (
      <SearchResultsWrapper>
        <ResultsCounter resultsSize={this.getResultsSize()} />
        {this.getResultsSize() ? <ResultsList results={this.props.results}
                                              fetchQuestion={this.props.actions.fetchQuestion}/> : null }
      </SearchResultsWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({results: state.searchBarReducer});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actionsCreator, dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);