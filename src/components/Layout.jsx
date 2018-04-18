import React, { Component } from 'react';
import styled from 'styled-components';
import { vars as v, mixins as m } from 'helpers';

import Intro from 'components/Intro';
import Accordion from 'components/Accordion';
import Contact from 'components/Contact';
import Profile from 'components/Profile';
import Dots from 'components/Dots';
import skills from 'data/skills.json';

const Main = styled.main`
  margin: 0 auto;
  max-width: ${v.layout.maxContentWidth}px;
`;

const AccordionWrapper = styled.ul`
  margin: 0 0 ${m.space(2)};
`;

const Subtitle = styled.h2`
  margin: 0 0 ${m.space(1)};
`;

class Layout extends Component {
  render() {
    return (
      <Main role="main">
        <Profile />
        <Intro />
        <Subtitle>Skills and objectives achieved</Subtitle>
        <AccordionWrapper aria-label="Accordion Control Group Buttons">
          {skills.map((item, index) => (
            <Accordion key={(index + 1).toString()} index={index + 1} title={item.title}>
              {item.description.map(value => <p>{value}</p>)}
            </Accordion>
          ))}
        </AccordionWrapper>
        <Contact />
        <Dots />
      </Main>
    );
  }
}

export default Layout;
