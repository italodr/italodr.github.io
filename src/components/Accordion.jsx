import React, { Component } from 'react';
import styled from 'styled-components';
import { vars as v, mixins as m } from 'helpers';

const AccordionButton = styled.button`
  cursor: pointer;
  display: flex;
  font-size: ${m.font(1)};
  justify-content: space-between;
  position: relative;
  text-align: left;
  width: 100%;
  padding: ${m.space(0.5)} 0;
`;

const AccordionContent = styled.div`
  font-size: ${m.font(0.75)};
  padding: ${m.space(1)} 0;
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
        {this.state.open && (
          <AccordionContent id={`content-${this.props.index}`} aria-hidden={!this.state.open}>
            {this.props.children}
          </AccordionContent>
        )}
      </AccordionWrapper>
    );
  }
}

export default Accordion;
