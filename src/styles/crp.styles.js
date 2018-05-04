import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'),
    url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2'),
    url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wWA.woff) format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
    U+2C60-2C7F, U+A720-A7FF, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F,
    U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'),
    url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2'),
    url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPHw.woff) format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img,
ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,
dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,
figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav,
section {
  display: block;
}

blockquote, q {
  quotes: none;
}

ol, ul {
  list-style: none;
}

blockquote::before, blockquote::after, q::before, q::after {
  content: none;
}

button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: none repeat scroll 0 0 transparent;
  border: 0;
}

iframe {
  border: 0;
}

img {
  display: block;
  height: auto;
  -ms-interpolation-mode: bicubic;
  max-width: 100%;
  width: auto;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

*,
*::before,
*::after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased !important;
  font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}

html,
body {
  height: 100%;
  position: relative;
}

body {
  font-size: 16px;
  font-family: 'Helvetica, Arial, sans-serif';
  overflow-x: hidden;

  html.fonts-loaded & {
    font-family: "Lato", sans-serif;
  }
}

b, strong {
  font-weight: 700;
}

@media only screen and (min-width: 480px) {
  body {
    font-size: calc(16px + 2 * ((100vw - 480px) / 288));
  }
}

@media only screen and (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
`;
