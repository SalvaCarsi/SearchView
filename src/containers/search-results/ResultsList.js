'use strict';

import React, { Component } from 'react';

import { ListTextWrapper } from '../../components/styled/TextWrapper';

export class ResultsList extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {

    const listItems = this.props.results.map((question) =>
        <ListTextWrapper key={question.id}>
          {question.title}
        </ListTextWrapper>
      );

    return (
      <div>{listItems}</div>
    );
  }

}

export default ResultsList;