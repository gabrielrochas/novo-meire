import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  background: #f5f4f0;
  display: block;
  height: 100%;
  max-height: 640px;
  margin: 0 auto;
  padding: 0;
}

body {
  background-color: #fafafa;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`;

export const theme = {
  colors: {
    primary: '#fafafa',
  },
};


