import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<ThemeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html, body, #root {
    scroll-behavior: smooth;
  }

  *, button, input {
    font-family: Roboto, sans-serif;
    outline: none !important;
  }

  body {
    background: ${({ theme }: ThemeProps) => theme.colors.white[70]};
    color: ${({ theme }: ThemeProps) => theme.colors.black.base};
  }

  :root {
    --color-primary: #835AFD;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #3333;
  }

  ::-webkit-scrollbar-thumb {
    background: #89777a;
    border-radius: 4px;
    transition: 0.6s ease-in-out !important;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333333;
    transition: 0.6s ease-in-out !important;
  }

  a {
    transition: filter ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
    outline: none;
  }

  a:hover{
    transition: filter ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
    filter: brightness(1.2);
    outline: none;
  }
`;
