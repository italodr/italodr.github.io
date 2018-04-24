import React, { Component } from 'react';
import styled from 'styled-components';
import { vars as v, space } from 'helpers/index';

const Wrapper = styled.a`
  background: ${v.colors.black};
  border: 0;
  color: ${v.colors.white};
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
