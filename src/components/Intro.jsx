import React, { Component } from 'react';
import styled from 'styled-components';
import { vars as v, mixins as m } from 'helpers';

const Container = styled.section`
  margin: 0 0 ${m.space(2)};
`;

const Featured = styled.p`
  font-size: ${m.font(1.15)};
  color: ${v.colors.black};
`;

class Intro extends Component {
  render() {
    return (
      <Container>
        <Featured>
          I'm a proactive-tireless fullstack web developer eager to learn to develop in new
          environments, new functionalities… new challenges! And above all, I’m always focused on
          functional solutions that respond to specific needs.
        </Featured>
        <p>
          Originally from Peru, I’m currently living in Barcelona where I work with Runroom. There,
          I'm head of front-end developers and enjoy working together with researchers, designers
          and developers to create the final solutions that bring the maximum value to users and
          turn the client's app in gold.
        </p>
        <p>
          As a developer, I'm fully versatile to work in different environments and frameworks; with
          extensive experience in frameworks, emailing and e-commerce. Agile methodologies lover,
          and always focus in automatization and web performance, creating tools that facilitate and
          reduce the workload of my teammates.
        </p>
      </Container>
    );
  }
}

export default Intro;
