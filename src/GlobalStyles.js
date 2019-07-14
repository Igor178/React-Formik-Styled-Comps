import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box
    }

    *, *:before, *:after {
        box-sizing: border-box
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif
    }

`;

export default GlobalStyles;
