import React, { Component } from 'react';
import styled from 'styled-components';

import theme from 'styles/theme.styles';
import { space } from 'styles/mixins';

const AccordionButton = styled.button`
  color: ${theme.default.COLOR_BLACK};
  cursor: pointer;
  display: flex;
  font-family: ${theme.default.FONT_FAMILY_FALLBACK};
  font-size: 1rem;
  justify-content: space-between;
  position: relative;
  text-align: left;
  width: 100%;
  padding: ${space(0.5)} 0;

  html.${theme.default.FONT_LOADEDCLASS} & {
    font-family: ${theme.default.FONT_FAMILY_BASE};
  }
`;

const AccordionContent = styled.div`
  display: none;
  font-size: 0.75rem;
  padding: ${space(0.25)} 0 ${space(1)};
  &.is-visible {
    display: block;
  }
`;

const AccordionWrapper = styled.li`
  border: solid ${theme.default.COLOR_BLACKLIGHTER};
  border-width: 0 0 1px;
  list-style: none;
`;

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <AccordionWrapper>
        <AccordionButton
          aria-controls={`content-${this.props.index}`}
          aria-expanded={this.state.open}
          onClick={this.toggleAccordion}
        >
          {this.props.title} <span aria-hidden="true">{this.state.open ? '-' : '+'}</span>
        </AccordionButton>
        <AccordionContent
          id={`content-${this.props.index}`}
          className={this.state.open && 'is-visible'}
          aria-hidden={!this.state.open}
        >
          {this.props.children}
        </AccordionContent>
      </AccordionWrapper>
    );
  }
}

export default Accordion;
