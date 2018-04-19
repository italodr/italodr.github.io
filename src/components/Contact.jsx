import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import { mixins as m, vars as v } from 'helpers';
import iconEmail from 'assets/img/sprites/email.svg';
import iconTwitter from 'assets/img/sprites/twitter.svg';
import iconGithub from 'assets/img/sprites/github.svg';
import iconLinkedin from 'assets/img/sprites/linkedin.svg';

const Wrapper = styled.ul`
  margin: 0 0 ${m.space(2)};
`;

const Item = styled.li`
  margin: 0 0 ${m.space(1)};
`;

const AccountName = styled.span`
  color: ${v.colors.blue};
`;

class Intro extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <Wrapper>
          <Item>
            <Icon icon={iconEmail} />
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
            <Icon icon={iconTwitter} />
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
            <Icon icon={iconGithub} />
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
            <Icon icon={iconLinkedin} />
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
