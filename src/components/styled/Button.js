'use strict';

import styled from 'styled-components';

const alternativeBackground = `
  background: #FFF; 
  color: #000;
`;

const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  margin: auto 0.2em;
  width: 70px;
  height: 24px;
  cursor: pointer;
  outline: 0;
  border: 1px solid #000;
  color: #000;
  background: #FFF;
  
  &:active {
    ${alternativeBackground}
  }
  
  &:hover { 
    ${alternativeBackground}
  }
`;

export default Button;