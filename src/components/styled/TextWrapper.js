'use strict';

import styled from 'styled-components';

const TextWrapper = styled.div`
  font-size: ${props => props.size}em;
  font-weight: ${props => props.fontWeight};
  text-align: center;
  padding: ${props => props.padding};
`;

export default TextWrapper;