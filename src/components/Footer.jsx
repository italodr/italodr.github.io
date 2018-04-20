import React, { Component } from 'react';
import styled from 'styled-components';

import Dots from 'components/Dots';
import { mixins as m } from 'helpers';

const Wrapper = styled.footer`
  margin: ${m.space(2)} 0 0;
  padding: ${m.space(0.5)} 0;
`;

class Footer extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <Wrapper aria-hidden="true">
        <Dots />
      </Wrapper>
    );
  }
}

export default Footer;
