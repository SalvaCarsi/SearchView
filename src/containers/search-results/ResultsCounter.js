'use strict';

import React, { Component } from 'react';

import { ListTextWrapper } from '../../components/styled/TextWrapper';

export class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <ListTextWrapper>
        Se han encontrado {this.props.resultsSize} resultados
      </ListTextWrapper>
    );
  }

}

export default SearchResults;