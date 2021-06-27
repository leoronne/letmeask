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
    background: ${({ theme }: ThemeProps) => theme.colors.background.base};
    color: ${({ theme }: ThemeProps) => theme.colors.black.base};
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover{
    transition: filter ${({ theme }: ThemeProps) => theme.transitions.easeInOut.base};
    filter: brightness(1.2);
    outline: none;
  }
`;
