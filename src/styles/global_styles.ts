import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background: #030303;
}

a {
  text-decoration: none;
  color: inherit;
}

input {
  border: 0;
  font-family: inherit;
  font-size: inherit;
  background: transparent;

  &:focus {
    outline:0;
  }
}

ul {
  list-style:none;
}

button {
  border:0;
  color: inherit;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  cursor:pointer;
  &:focus {
    outline: none;
  }
}
`;

export default GlobalStyle;
