import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
}
body {
    margin: 0 auto;
    max-width: 375px;
    position: relative;
    @media (min-width: 1440px) {
        width: 1110px;
        max-width: unset;
    }
}


`;
