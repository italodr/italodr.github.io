import React, { Component } from 'react';
import FontFaceObserver from 'fontfaceobserver';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Layout from 'components/Layout';

import './lato.css';

class App extends Component {
  constructor() {
    super();

    Promise.all([new FontFaceObserver('Lato')])
      .then(() => {
        document.documentElement.classList.add('fonts-loaded');
      })
      .catch(err => {
        // console.error('Failed to load fonts!', err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
