import React, { Component } from 'react';
import FontFaceObserver from 'fontfaceobserver';

import SkipLink from 'components/SkipLink';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Layout from 'components/Layout';

import { vars as v } from 'helpers/index';

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
        <SkipLink label="Skip to main content (Press enter)" target="#main" />
        <Header />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
