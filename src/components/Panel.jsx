import React, { Component } from 'react';
import styled from 'styled-components';
import { media, mixins as m } from 'helpers';

const PanelTitle = styled.h2`
  margin: 0 0 ${m.space(1)};
  ${media.tablet`
    padding: 0 ${m.space(1)} 0 0;
    width: 35%;
  `};
`;

const PanelContent = styled.ul`
  margin: 0 0 ${m.space(2)};
  ${media.tablet`
    margin: 0;
    width: 65%;
  `};
`;

class Panel extends Component {
  render() {
    return (
      <article>
        <PanelTitle>{this.props.title}</PanelTitle>
        <PanelContent>{this.props.children}</PanelContent>
      </article>
    );
  }
}

export default Panel;
