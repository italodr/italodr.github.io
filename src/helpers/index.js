import { css } from 'styled-components';

export const media = {
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `
};

export const vars = {
  maxContentWidth: 640,
  font: {
    family: {
      base: '"Lato", sans-serif',
      fallback: 'Helvetica, Arial, sans-serif'
    },
    loadedClass: 'fonts-loaded',
    weight: 400,
    size: { base: 16 },
    lineHeight: { base: 1.5 }
  },
  colors: {
    white: '#fff',
    black: '#000',
    blackLight: '#595959',
    blackLighter: 'rgba(0, 0, 0, .25)',
    green: '#6a926a',
    blue: '#00929f',
    mint: '#35a492',
    secondary: '#1f6156',
    link: '#00626B'
  }
};

export const space = n => `${vars.font.lineHeight.base * n}rem`;
export const pxs = n => vars.font.size.base * n;
