'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import QuestionResultWrapper from '../../components/styled/QuestionResultWrapper';
import { ResultTextWrapper, HeaderTextWrapper, LinkWrapper } from '../../components/styled/TextWrapper';
import QuestionAnswers from './QuestionAnswers';

export class QuestionResult extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <QuestionResultWrapper>
        <HeaderTextWrapper>
          Buscador de preguntas
        </HeaderTextWrapper>
        <ResultTextWrapper>
          {this.props.questionDetail.title}
        </ResultTextWrapper>
        <LinkWrapper><Link to="/" >Volver</Link></LinkWrapper>
        <QuestionAnswers answers={this.props.questionDetail.answers}/>
      </QuestionResultWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({questionDetail: state.searchResultsReducer});
export default connect(mapStateToProps)(QuestionResult);