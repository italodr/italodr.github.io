import React, { Component } from 'react';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';

import store from 'redux/store';
import Layout from 'components/Layout';

const FONT_LOADED_CLASS = 'fonts-loaded';

// const Wrapper = styled(Layout)`
//   body {
//     color: ${theme.default.COLOR_BLACKLIGHT};
//     font-family: ${theme.default.FONT_FAMILY_FALLBACK};
//     font-weight: ${theme.default.FONT_WEIGHT_BASE};
//     line-height: ${theme.default.FONT_LINEHEIGHT_BASE};

//     html.${theme.default.FONT_LOADED_CLASS} & {
//       font-family: ${theme.default.FONT_FAMILY_BASE};
//     }
//   }

//   h1 {
//     color: ${theme.default.COLOR_BLACK};
//     font-size: 2rem;
//   }

//   h2 {
//     color: ${theme.default.COLOR_SECONDARY};
//     font-size: 1.25rem;
//     margin: 0 0 ${theme.default.FONT_LINEHEIGHT_BASE}rem;
//   }

//   h3 {
//     font-size: 0.75rem;
//     margin: 0;
//     text-transform: uppercase;
//   }

//   p {
//     font-size: 1rem;
//     margin: 0 0 ${theme.default.FONT_LINEHEIGHT_BASE}rem;
//   }

//   a {
//     font-size: 1rem;
//     color: ${theme.default.COLOR_BLACK};
//   }
// `;

class App extends Component {
  constructor() {
    super();

    Promise.all([new FontFaceObserver('Lato')])
      .then(() => {
        document.documentElement.classList.add(FONT_LOADED_CLASS);
      })
      .catch(err => {
        // console.error('Failed to load fonts!', err);
      });
  }

  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
