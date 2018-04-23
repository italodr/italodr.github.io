import React, { Component } from 'react';
import styled from 'styled-components';
import { media, space } from 'helpers';

import logo from 'assets/img/logo-italodr.svg';

const Wrapper = styled.header`
  padding: ${space(0.75)} 0 ${space(1.5)};
`;

const Logo = styled.img`
  display: block;
  height: ${space(1.5)};
  margin: 0 auto;
  ${media.tablet`
    margin: 0;
  `};
`;

class Header extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <Wrapper aria-hidden="true">
        <Logo src={logo} alt="" />
      </Wrapper>
    );
  }
}

export default Header;
