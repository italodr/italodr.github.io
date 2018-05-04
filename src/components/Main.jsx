import React, { Component } from 'react';
import styled from 'styled-components';

import theme from 'styles/theme.styles';
import Intro from 'components/Intro';
import Skills from 'components/Skills';
import Contact from 'components/Contact';
import Profile from 'components/Profile';

const Main = styled.main`
  margin: 0 auto;
  max-width: ${theme.default.MAX_CONTENT_WIDTH}px;
`;

class Layout extends Component {
  render() {
    return (
      <Main id="main" role="main">
        <Profile />
        <Intro />
        <Skills />
        <Contact />
      </Main>
    );
  }
}

export default Layout;
