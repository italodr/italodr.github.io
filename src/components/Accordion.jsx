import React, { Component } from 'react';
import styled from 'styled-components';
import { vars as v, space } from 'helpers';

const AccordionButton = styled.button`
  color: ${v.colors.black};
  cursor: pointer;
  display: flex;
  font-family: ${v.font.family.fallback};
  font-size: 1rem;
  justify-content: space-between;
  position: relative;
  text-align: left;
  width: 100%;
  padding: ${space(0.5)} 0;

  html.${v.font.loadedClass} & {
    font-family: ${v.font.family.base};
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
  border: solid ${v.colors.blackLighter};
  border-width: 0 0 1px;
  list-style: none;
`;

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion() {
    this.setState({
      open: !this.state.open
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
