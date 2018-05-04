import React, { Component } from 'react';
import styled from 'styled-components';

import store from 'redux/store';
import theme from 'styles/theme.styles';
import avatar from 'images/profile-italo.jpg';

const data = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressRegion: 'ES',
    postalCode: '08940',
  },
  email: 'mailto:italodr@gmail.com',
  image: avatar,
  jobTitle: 'Fullstack web developer',
  name: 'Italo Devoto Ramella',
  telephone: '+34608227578',
  url: 'http://www.italodr.com',
};

const Profile = styled.section`
  text-align: left;
`;

const Title = styled.h1`
  color: ${props => theme[props.theme].COLOR_TEXT};
  font-size: 2rem;
`;

const Subtitle = styled.h2`
  color: ${props => theme[props.theme].COLOR_SECONDARY};
  font-size: 1.25rem;
  margin: 0 0 ${props => theme[props.theme].FONT_LINEHEIGHT_BASE}rem;
`;

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();

    store.subscribe(() => {
      this.setState({
        theme: store.getState().theme,
      });
    });
  }
  render() {
    return (
      <Profile>
        <Title theme={this.state.theme}>Hi, I'm Italo</Title>
        <Subtitle theme={this.state.theme}>
          Fullstack web <s>developer</s>
          <span aria-hidden="true"> alchemist</span>
        </Subtitle>
        <script type="application/ld+json">{JSON.stringify(data)}</script>
      </Profile>
    );
  }
}

export default ProfileComponent;
