'use strict';

import React, { Component } from 'react';

import { QuestionAnswreHeadertWrapper } from '../../components/styled/TextWrapper';

export class QuestionAnswers extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
        <QuestionAnswreHeadertWrapper>
          Respuestas de los entrenadores
        </QuestionAnswreHeadertWrapper>
    );
  }
}

export default QuestionAnswers;