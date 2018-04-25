import React, { Component } from 'react';
import styled from 'styled-components';

import theme from 'styles/theme.styles';
import { space } from 'helpers';

const Wrapper = styled.a`
  background: ${theme.default.COLOR_BLACK};
  border: 0;
  color: ${theme.default.COLOR_WHITE};
  font-size: 1.25rem;
  left: -120%;
  margin: ${space(1)} 0;
  padding: ${space(0.25)} ${space(0.5)};
  position: absolute;
  text-align: center;
  top: 0;
  z-index: 2;

  &:focus,
  &:active {
    left: 10%;
  }
`;

class SkipLink extends Component {
  render() {
    return <Wrapper href={this.props.target}>{this.props.label}</Wrapper>;
  }
}

export default SkipLink;
