'use strict';

import React, { Component } from 'react';
import _ from 'lodash';

import { QuestionAnswerHeaderWrapper } from '../../components/styled/TextWrapper';
import { ListTextWrapper, AnswersResultTextWrapper, NumberOfValidationsWrapper } from '../../components/styled/TextWrapper';

export class QuestionAnswers extends Component {

  constructor(props) {
    super(props);
  }

  renderAnswers = () => {

    // We show nothing in case the store doesn't have the data yet
    if (_.isNil(this.props.answers)) return null;

    const sortedAnswers = this.props.answers.sort(
      (a, b) => {
        if (a.count_validations > b.count_validations) return -1;
        if (a.count_validations < b.count_validations) return 1;
        return 0;
      }
    );

    const answersList = sortedAnswers.map( answer =>
      <ListTextWrapper key={answer.id} >
        <AnswersResultTextWrapper>
          {answer.text}
          <NumberOfValidationsWrapper>
            {answer.count_validations} validaciones
          </NumberOfValidationsWrapper>
        </AnswersResultTextWrapper>
      </ListTextWrapper>
    );

    return (
      <div>{answersList}</div>
    )
  };

  render = () => {
    return (
        <div>
          <QuestionAnswerHeaderWrapper>
            Respuestas de los entrenadores
          </QuestionAnswerHeaderWrapper>
          {this.renderAnswers()}
        </div>
    );
  }
}

export default QuestionAnswers;