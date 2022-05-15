import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --backgrond: #000;
    --text-color: #FFF;
    --button: #8257E5;
    --border: #29292E;
    --border-menu-mobile: #A8A8B3;
    --text-color-menu-mobile: #E1E1E6;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080) {
      font-size: 93.5%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--backgrond);
    overflow: hidden;
    width: 100vw;

  }

  body,
  input,
  textarea,
  button {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    color: var(--text-color);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
