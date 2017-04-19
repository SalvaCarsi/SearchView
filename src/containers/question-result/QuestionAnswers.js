'use strict';

import React, { Component } from 'react';

import { QuestionAnswerHeaderWrapper } from '../../components/styled/TextWrapper';

export class QuestionAnswers extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
        <QuestionAnswerHeaderWrapper>
          Respuestas de los entrenadores
        </QuestionAnswerHeaderWrapper>
    );
  }
}

export default QuestionAnswers;