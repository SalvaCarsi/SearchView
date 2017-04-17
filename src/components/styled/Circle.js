'use strict';

import styled from 'styled-components';

import { fadeIn } from './animations';

const commonStyles = `
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #E52424;
`;


const MediumCircle = styled.div`
	margin: 0.4em;
	width: 3.9em;
	height: 3.9em; 
	${commonStyles}
	animation: ${(props) => props.delay}s ${fadeIn} ease-out;
`;

const SmallCircle = styled.div`
	margin-left: 0.4em;
	margin-right: 0.4em;
	width: 2.2em;
	height: 2.2em; 
  display: inline-block;
  ${commonStyles}
  animation: ${(props) => props.delay}s ${fadeIn} ease-out;
`;

export {MediumCircle, SmallCircle};