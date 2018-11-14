import React, { Component } from 'react';
import styled from 'styled-components';

import theme from 'styles/theme.styles';
import { space } from 'styles/mixins';

const dotsSize = 8;
const dotsSpace = `${dotsSize * 2}px`;

const Wrapper = styled.span`
  background: ${theme.default.COLOR_BLUE};
  margin: ${space(0.5)} auto;
  position: relative;

  &,
  &::before,
  &::after {
    border-radius: 50%;
    display: block;
    height: ${dotsSize}px;
    width: ${dotsSize}px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
  }

  &::before {
    background: ${theme.default.COLOR_GREEN};
    right: ${dotsSpace};
  }

  &::after {
    background: ${theme.default.COLOR_MINT};
    left: ${dotsSpace};
  }
`;

class Dots extends Component {
  render() {
    return <Wrapper aria-hidden="true" />;
  }
}

export default Dots;
