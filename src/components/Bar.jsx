import React, { Component } from 'react';
import styled from 'styled-components';
import { space, vars as v } from 'helpers';

const Wrapper = styled.div`
  -webkit-animation: GradientBar 12s ease infinite;
  -moz-animation: GradientBar 12s ease infinite;
  animation: GradientBar 12s ease infinite;
  background: linear-gradient(270deg, ${v.colors.green}, ${v.colors.blue}, ${v.colors.mint});
  background-size: 600% 600%;
  height: ${space(0.25)};
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  @-webkit-keyframes GradientBar {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes GradientBar {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes GradientBar {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

class Bar extends Component {
  render() {
    return <Wrapper />;
  }
}

export default Bar;
