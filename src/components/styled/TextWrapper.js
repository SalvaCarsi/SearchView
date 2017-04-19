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

const ResultTextWrapper = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  font-weight: none;
  padding: 0.5em 0.5em;
  text-align: center;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: #000;
  border-radius: 5px 5px 5px 5px;
  padding: 1em 1em;
  text-align: center;
  margin: auto 8em;
  background: #E6E6FA;
`;

export { HeaderTextWrapper, ListTextWrapper, ResultTextWrapper } ;