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
    background-color: #eee;
  }
`;