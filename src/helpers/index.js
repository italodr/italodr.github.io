import { css } from 'styled-components';
import theme from 'styles/theme.styles';

export const media = {
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `
};

export const space = n => `${theme.default.FONT_LINEHEIGHT_BASE * n}rem`;
export const pxs = n => theme.default.FONT_SIZE_BASE * n;
