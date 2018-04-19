import React, { Component } from 'react';
import styled from 'styled-components';
import { mixins as m } from 'helpers';

import logo from 'assets/img/logo-italodr.svg';

const Wrapper = styled.header`
  padding: ${m.space(0.75)} 0;
`;

const Logo = styled.img`
  display: block;
  height: ${m.vr(1.5)};
`;

class Header extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <Wrapper role="header">
        <Logo src={logo} alt="" />
      </Wrapper>
    );
  }
}

export default Header;
