import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (min-width: 1024px) {
  html {
    font-size: 93.75%;
  }
}

@media (min-width:768px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background-color: #fafafa;
  margin: 0 auto;

  color: #353535;
}

p,
h4,
h5,
h6,
body,
button,
input,
select,
textarea {
  font: 400 1rem 'Roboto', 'Helvetica Neue', sans-serif;
}

h1,
h2,
h3 {
  font: 600 2rem 'Roboto', 'Helvetica Neue', sans-serif;
}

a {
  color: #0f6643;
  text-decoration: none;

  &:hover {
    color: #23a455;
  }
}

button {
  cursor: pointer;
}
`;

export const theme = {
  colors: {
    primary: '#353535',
    link: '#0f6643',
    linkHover: '#23a455',
  },
};
