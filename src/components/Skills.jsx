import React, { Component } from 'react';
import styled from 'styled-components';

import Accordion from 'components/Accordion';
import skills from 'data/skills.json';
import { mixins as m } from 'helpers';

const Wrapper = styled.ul`
  margin: 0 0 ${m.space(2)};
`;

class Footer extends Component {
  render() {
    return (
      <div>
        <h2>Skills and objectives achieved</h2>
        <Wrapper aria-label="Accordion Control Group Buttons">
          {skills.map((item, index) => (
            <Accordion key={`acccItem${index.toString()}`} index={index + 1} title={item.title}>
              {item.description.map((value, i) => (
                <p key={`acccItem${index.toString()}_${i.toString()}`}>{value}</p>
              ))}
            </Accordion>
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Footer;
