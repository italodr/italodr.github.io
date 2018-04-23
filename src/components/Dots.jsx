import React, { Component } from 'react';
import styled from 'styled-components';
import { vars as v, space } from '../helpers';

const dotsSize = 8;
const dotsSpace = `${dotsSize * 2}px`;

const Wrapper = styled.span`
  background: ${v.colors.blue};
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
    background: ${v.colors.green};
    right: ${dotsSpace};
  }

  &::after {
    background: ${v.colors.mint};
    left: ${dotsSpace};
  }
`;

class Dots extends Component {
  render() {
    return <Wrapper aria-hidden="true" />;
  }
}

export default Dots;
