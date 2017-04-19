'use strict';

import styled from 'styled-components';

// TODO put values in variables in order to DRY

const HeaderTextWrapper = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.5em 0.5em;
  text-align: center;
`;

const ListTextWrapper = styled.div`
  font-size: 0.9em;
  font-weight: none;
  padding: 0.5em 0.5em;
  text-align: left;
`;

const LinkWrapper = styled.div`
  font-size: 0.7em;
  padding: 0.5em 0.5em;
  text-align: left;
  text-decoration: none;
  margin-top: 3em;
  display: inline;
`;

const QuestionAnswerHeaderWrapper = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  padding: 0.5em 0.5em;
  text-align: center;
  text-decoration: underline;
  margin-top: 3em;
`;

const ResultTextWrapper = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  padding: 0.5em 0.5em;
  text-align: center;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: #000;
  border-radius: 5px 5px 5px 5px;
  padding: 1em 1em;
  margin: auto 8em;
  background: #E6E6FA;
`;

const AnswersResultTextWrapper = styled.div`
  font-size: 0.9em;
  padding: 0.5em 0.5em;
  text-align: center;
  border-width: 1px 0px 1px 0px;
  border-style: solid;
  border-color: #CCCCFF;
  padding: 1em 1em;
  margin: auto 8em;
  background: #FFF;
`;

const NumberOfValidationsWrapper = styled.div`
  font-size: 0.9em;
  padding: 0.5em 0.5em;
  text-align: right;
  font-weight: bold;
  margin-top: 1em;
`;

export { HeaderTextWrapper, ListTextWrapper, ResultTextWrapper, QuestionAnswerHeaderWrapper, LinkWrapper,
  AnswersResultTextWrapper, NumberOfValidationsWrapper } ;