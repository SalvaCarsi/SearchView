'use strict';

import React, { Component } from 'react';
import _ from 'lodash';

import { QuestionAnswerHeaderWrapper } from '../../components/styled/TextWrapper';
import { ListTextWrapper } from '../../components/styled/TextWrapper';

export class QuestionAnswers extends Component {

  constructor(props) {
    super(props);
  }

  renderAnswers = () => {

    if (_.isNil(this.props.answers)) return null;

    const answersList = this.props.answers.map( answer =>
      <ListTextWrapper key={answer.id} >
        {answer.text}
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