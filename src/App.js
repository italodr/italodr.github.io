import React, { Component } from 'react';
import FontFaceObserver from 'fontfaceobserver';

import SkipLink from 'components/SkipLink';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Layout from 'components/Layout';

import { vars as v } from 'helpers/index';
import skipLinks from 'data/skip-links.json';

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
      <div>
        {skipLinks.map((item, index) => (
          <SkipLink key={`skip${index.toString()}`} label={item.title} target={item.target} />
        ))}
        <Header />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
