import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        line-height: 1.4;
    }

    button {
        cursor: pointer;
    }

    :root {
        --overlay-color: rgba(24, 39, 51 , 0.85);
        --menu-speed: 0.75s;
    }
`;
