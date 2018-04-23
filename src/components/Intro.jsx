import React, { Component } from 'react';
import styled from 'styled-components';
import { vars as v, space } from 'helpers';

const Container = styled.section`
  margin: 0 0 ${space(2)};
`;

const Featured = styled.p`
  font-size: 1.15rem;
  color: ${v.colors.black};
`;

class Intro extends Component {
  render() {
    return (
      <Container>
        <Featured>
          I consider myself a proactive, resolute and tireless person in continuing to learn and in
          search of continuously improvement in order to contribute with value and quality in
          everything I do, and always focused on functional solutions that respond to specific
          needs.
        </Featured>
        <p>
          Originally from Peru, I’m currently living in Barcelona where I work with Runroom as Head
          of front-end developers. I enjoy working together with researchers, designers and
          developers in the endless search of the best solutions that can bring the maximum value to
          users and turn the client's project into <i>gold</i>.
        </p>
        <p>
          Continuous improvement is a need that helps me to constantly seek better solutions, not
          only for the clients with whom I work, but also, and mainly, for the working life of all
          my teammates. Analyzing and creating tools that help to automate processes, thus
          optimizing the productivity of the teams. I also love Agile methodologies, and keep focus
          in accessibility, automatization processes and web performance.
        </p>
      </Container>
    );
  }
}

export default Intro;
