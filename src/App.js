import React, { Component } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import styled from 'styled-components';

import SkipLink from 'components/SkipLink';
import Bar from 'components/Bar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Layout from 'components/Layout';

import { space, vars as v } from 'helpers/index';
import skipLinks from 'data/skip-links.json';

const Wrapper = styled.div`
  padding: ${space(0.25)} 0 0;
`;

class App extends Component {
  constructor() {
    super();

    Promise.all([new FontFaceObserver('Lato')])
      .then(() => {
        document.documentElement.classList.add(v.font.loadedClass);
      })
      .catch(err => {
        // console.error('Failed to load fonts!', err);
      });
  }

  render() {
    return (
      <Wrapper>
        {skipLinks.map((item, index) => (
          <SkipLink key={`skip${index.toString()}`} label={item.title} target={item.target} />
        ))}
        <Bar />
        <Header />
        <Layout />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
