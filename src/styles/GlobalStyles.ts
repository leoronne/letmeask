import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
    transition: filter 0.6s ease !important;
    outline: none;
  }

  a:hover{
    transition: filter 0.6s ease !important;
    filter: brightness(1.2);
    outline: none;
  }

  button {
    transition: 0.6s ease !important;
    outline: none;
  }

  button:hover{
    transition: 0.6s ease !important;
    outline: none;
  }

  input {
    transition: 0.7s !important;
    outline: none !important;
  }

  input:focus {
    outline: none !important;
    transition: 0.7s !important;
  }

`;
