import { createGlobalStyle } from 'styled-components';

export default {
  dimensions: {
    firstBreackPoint: '1000px',
    secondBreackPoint: '760px',
  },
  colors: {
    primary: '#048b9a'
  }
};

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
    outline: none;
    font-family: 'Ubuntu', sans-serif;
    color: rgba(0,0,0, .85);
  }

  body, #root {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #fff;
  }
  /* Prevent chrome to colorize autocompleted inputs   */
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus
  input:-webkit-autofill, 
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border:none !important;
    -webkit-text-fill-color: inherit !important;
    -webkit-box-shadow: 0 0 0px 1000px #ccc inset;
    box-shadow: 0 0 0px 1000px #ccc inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;