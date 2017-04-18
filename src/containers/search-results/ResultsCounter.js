'use strict';

import React, { Component } from 'react';
// import { connect } from 'react-redux';

import TextWrapper from '../../components/styled/TextWrapper';

export class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <TextWrapper>
        Se han encontrado {this.props.resultsSize} resultados
      </TextWrapper>
    );
  }

}

export default SearchResults;

// Container
// const mapStateToProps = state => ({results: state.searchBarReducer});
// export default connect(mapStateToProps)(SearchResults);