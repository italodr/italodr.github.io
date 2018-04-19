import { css } from 'styled-components';

export const media = {
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `
};

export const vars = {
  layout: {
    gap: 20,
    maxContentWidth: 640
  },
  font: {
    family: 'droid-sans-mono, monospace',
    weight: 400,
    size: {
      base: 16
    },
    lineHeight: {
      base: 24
    }
  },
  colors: {
    black: '#000',
    blackLight: 'rgba(0, 0, 0, .5)',
    blackLighter: 'rgba(0, 0, 0, .25)',
    green: '#6a926a',
    blue: '#00929f',
    mint: '#35a492'
  }
};

export const mixins = {
  space: n => `${vars.layout.gap * n / vars.font.size.base}rem`,
  font: n => `${vars.font.size.base * n / vars.font.size.base}rem`,
  vr: n => `${vars.font.lineHeight.base * n / vars.font.size.base}rem`
};
