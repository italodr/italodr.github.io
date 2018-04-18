import React, { Component } from 'react';
import styled from 'styled-components';
import { media, mixins as m } from 'helpers';

import Panel from 'components/Panel';

const Wrapper = styled.li`
  margin: 0 0 ${m.space(1)};
  ${media.tablet`
    display: 'flex'
  `};
`;

class Intro extends Component {
  render() {
    return (
      <Panel key="contact" title="Contact">
        <Wrapper>
          <h3>Email</h3>
          <a
            href="mailto:italodr@gmail.com"
            title="Email me"
            target="_blank"
            rel="noopener noreferrer"
          >
            italodr@gmail.com
          </a>
        </Wrapper>
        <Wrapper>
          <h3>Twitter</h3>
          <a
            href="https://twitter.com/@italo_dr"
            title="Twitter account"
            target="_blank"
            rel="noopener noreferrer"
          >
            @italo_dr
          </a>
        </Wrapper>
        <Wrapper>
          <h3>Github</h3>
          <a
            href="https://github.com/italodr"
            title="Github account"
            target="_blank"
            rel="noopener noreferrer"
          >
            italodr
          </a>
        </Wrapper>
        <Wrapper>
          <h3>Linkedin</h3>
          <a
            href="https://www.linkedin.com/in/italodr/"
            title="Linkedin account"
            target="_blank"
            rel="noopener noreferrer"
          >
            italodr
          </a>
        </Wrapper>
      </Panel>
    );
  }
}

export default Intro;
