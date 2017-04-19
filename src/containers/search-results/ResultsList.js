'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { ListTextWrapper } from '../../components/styled/TextWrapper';
import ListIndexWrapper from '../../components/styled/ListIndexWrapper';

export class ResultsList extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    this.props.fetchQuestion(event.currentTarget.id);
    browserHistory.push('/question');
  };

  render = () => {

    // TODO For efficiency this should be calculated in the backend, returning the number of answers for each question
    // TODO instead of the array of answers itself. For the test we are going to implemented this way.
    const sortedItems = this.props.results.sort(
      (a, b) => {
        if (a.answers.length > b.answers.length) return -1;
        if (a.answers.length < b.answers.length) return 1;
        return 0;
      }
    );

    const listItems = sortedItems.map((question, index) =>
        <ListTextWrapper key={question.id} id={question.id} onClick={this.handleSubmit}>
          <ListIndexWrapper>{index+1}</ListIndexWrapper> {question.title}
        </ListTextWrapper>
      );

    return (
      <div>{listItems}</div>
    );
  }

}

export default ResultsList;