import React, { Component } from 'react';
import styled from 'styled-components';
import { space, vars as v } from 'helpers';

const Wrapper = styled.span`
  display: inline-block;
  color: ${v.colors.blackLight};

  img {
    display: block;
    height: 1rem;
    margin: 0 ${space(0.5)} 0 0;
    width: 1rem;
  }
`;

class Icon extends Component {
  render() {
    return (
      <Wrapper aria-hidden="true">
        <img src={this.props.icon} alt="" />
      </Wrapper>
    );
  }
}

export default Icon;
