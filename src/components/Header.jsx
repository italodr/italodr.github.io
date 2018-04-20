import React, { Component } from 'react';
import styled from 'styled-components';
import { media, mixins as m } from 'helpers';

import logo from 'assets/img/logo-italodr.svg';

const Wrapper = styled.header`
  padding: ${m.space(0.75)} 0 ${m.space(1.5)};
`;

const Logo = styled.img`
  display: block;
  height: ${m.vr(1.5)};
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
