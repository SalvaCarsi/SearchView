'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <h1>{this.props.questionDetail.title}</h1>
    );
  }

}

// Container
const mapStateToProps = state => ({questionDetail: state.searchResultsReducer});
export default connect(mapStateToProps)(QuestionResult);