import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import skipLinks from 'data/skip-links.json';
import { setTheme } from 'redux/actionCreators';
import theme from 'styles/theme.styles';

import SkipLink from 'components/SkipLink';
import Bar from 'components/Bar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Intro from 'components/Intro';
import Skills from 'components/Skills';
import Contact from 'components/Contact';
import Profile from 'components/Profile';

const Wrapper = styled.div`
  background: ${props => theme[props.theme].BACKGROUND_COLOR};
  padding: 0 ${props => theme[props.theme].FONT_LINEHEIGHT_BASE}rem;
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: ${props => theme[props.theme].MAX_CONTENT_WIDTH}px;
`;

const mapStateToProps = state => ({ theme: state.theme });
const mapDispatchToProps = dispatch => ({
  handleThemeChange(event) {
    dispatch(setTheme(event.target.dataset.theme));
  },
});

class Layout extends Component {
  render() {
    return (
      <div>
        <Bar />
        <Wrapper theme={this.props.theme}>
          {skipLinks.map((item, index) => (
            <SkipLink key={`skip${index.toString()}`} label={item.title} target={item.target} />
          ))}
          <Header />
          <Main theme={this.props.theme} id="main" role="main">
            <button type="button" data-theme="default" onClick={this.props.handleThemeChange}>
              default
            </button>
            <button type="button" data-theme="dark" onClick={this.props.handleThemeChange}>
              dark
            </button>
            <Profile />
            <Intro />
            <Skills />
            <Contact />
          </Main>
          <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
