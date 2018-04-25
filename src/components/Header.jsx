import React, { Component } from 'react';
import styled from 'styled-components';

import Vector from 'components/Vectors';
import { media, space, pxs } from 'helpers';

const Wrapper = styled.header`
  padding: ${space(0.75)} 0 ${space(1.5)};
`;

const Logo = styled(Vector.Logo)`
  margin: 0 auto;

  ${media.tablet`
    margin: 0;
  `};
`;

class Header extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <Wrapper>
        <Logo size={pxs(2)} aria-hidden="true" />
      </Wrapper>
    );
  }
}

export default Header;
