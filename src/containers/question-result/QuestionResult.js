'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionResultWrapper from '../../components/styled/QuestionResultWrapper';
import { ResultTextWrapper, HeaderTextWrapper } from '../../components/styled/TextWrapper';

// import SearchBarWrapper from '../../components/styled/SearchBarWrapper';
// import { HeaderTextWrapper } from '../../components/styled/TextWrapper';
// import Button from '../../components/styled/Button';
// import InputWrapper from '../../components/styled/InputWrapper';

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
      </QuestionResultWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({questionDetail: state.searchResultsReducer});
export default connect(mapStateToProps)(QuestionResult);