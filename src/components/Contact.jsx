import React, { Component } from 'react';
import styled from 'styled-components';

import Vector from 'components/Vectors';

import { space, pxs, vars as v } from 'helpers';

const Wrapper = styled.ul`
  margin: 0 0 ${space(2)};
`;

const Item = styled.li`
  margin: 0 0 ${space(0.5)};
`;

const AccountName = styled.span`
  color: ${v.colors.link};
`;

class Intro extends Component {
  render() {
    return (
      <div id="contact">
        <h2>Contact</h2>
        <Wrapper>
          <Item>
            <Vector.Email size={pxs(1)} aria-hidden="true" />
            <a
              href="mailto:italodr@gmail.com"
              title="Email me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send me an email <AccountName aria-hidden="true">italodr@gmail.com</AccountName>
            </a>
          </Item>
          <Item>
            <Vector.Twitter size={pxs(1)} aria-hidden="true" />
            <a
              href="https://twitter.com/@italo_dr"
              title="Twitter account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on twitter <AccountName aria-hidden="true">@italo_dr</AccountName>
            </a>
          </Item>
          <Item>
            <Vector.Github size={pxs(1)} aria-hidden="true" />
            <a
              href="https://github.com/italodr"
              title="Github account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkout my github account <AccountName aria-hidden="true">italodr</AccountName>
            </a>
          </Item>
          <Item>
            <Vector.Linkedin size={pxs(1)} aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/italodr/"
              title="Linkedin account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check my linkedin profile <AccountName aria-hidden="true">italodr</AccountName>
            </a>
          </Item>
        </Wrapper>
      </div>
    );
  }
}

export default Intro;
