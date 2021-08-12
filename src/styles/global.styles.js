import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        text-rendering: optimizeLegibility;
        /* background: black; */
        padding-top: 150vh;
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

    fieldset {
        all: unset;
    }

    * {
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;