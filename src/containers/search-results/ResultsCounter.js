'use strict';

import React, { Component } from 'react';

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