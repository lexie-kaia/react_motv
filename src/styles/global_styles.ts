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
  color: #212121;
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
`;

export default GlobalStyle;
