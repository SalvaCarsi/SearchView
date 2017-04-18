'use strict';

import React, { Component } from 'react';

import TextWrapper from '../../components/styled/TextWrapper';

export class ResultsList extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {

    console.log(this.props.results);

    const listItems = this.props.results.map((question) =>
      <li key={question.id}>
        <TextWrapper>
          {question.title}
        </TextWrapper>
      </li>);

    return (
      <ul>{listItems}</ul>
    );
  }

}

export default ResultsList;