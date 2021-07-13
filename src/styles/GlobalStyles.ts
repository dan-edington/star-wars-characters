import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import fontFaces from './fontFaces';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${fontFaces}
  
  :root {
    ${colors}
    --font-heading: "Star Jedi", sans-serif;
    --font-primary: sans-serif;
    --layout-width: 1100px;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-primary);
    ${({ theme }) => theme.typography.body};
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--colors-white);
    background-color: var(--colors-black);
  }
`;

export default GlobalStyles;
