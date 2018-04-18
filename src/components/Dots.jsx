import React, { Component } from 'react';
import styled from 'styled-components';
import { vars as v, mixins as m } from '../helpers';

const dotsSize = 8;
const dotsSpace = `${dotsSize * 2}px`;

const DotsWrapper = styled.span`
  background: ${v.colors.blue};
  margin: ${m.space(0.5)} auto;
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
    return <DotsWrapper aria-hidden="true" />;
  }
}

export default Dots;
