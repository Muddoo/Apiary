import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "Suisse Intl", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        text-rendering: optimizeLegibility;
        scrollbar-width: none;
        -ms-overflow-style: none;
        text-size-adjust: 100%;
        -moz-transition: all 350ms ease-in-out;
        -o-transition: all 350ms ease-in-out;
        -webkit-transition: all 350ms ease-in-out;
        transition: all 350ms ease-in-out;
        overflow-x: hidden;
    }

    ul {
        all: unset;
    }

    a {
        all: unset;
        color: inherit;
        cursor: pointer;
    }

    button {
        all: unset;
        cursor: pointer;
    }

    fieldset, input, textarea {
        all: unset;
    }

    * {
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
