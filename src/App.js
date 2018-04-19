import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Layout from 'components/Layout';

class App extends Component {
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
