import React, { Component } from 'react';
import styled from 'styled-components';
import { mixins as m } from 'helpers';

import avatar from 'assets/img/profile-italo.jpg';

const data = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressRegion: 'ES',
    postalCode: '08940'
  },
  email: 'mailto:italodr@gmail.com',
  image: avatar,
  jobTitle: 'Fullstack web developer',
  name: 'Italo Devoto Ramella',
  telephone: '+34608227578',
  url: 'http://www.italodr.com'
};

const Profile = styled.section`
  text-align: left;
`;

const Subtitle = styled.h2`
  margin: 0 0 ${m.space(1.5)};
`;

class ProfileComponent extends Component {
  render() {
    return (
      <Profile>
        <h1>Hi, I'm Italo</h1>
        <Subtitle>
          Fullstack web <s>developer</s> alchemist
        </Subtitle>
        <script type="application/ld+json">{JSON.stringify(data)}</script>
      </Profile>
    );
  }
}

export default ProfileComponent;
