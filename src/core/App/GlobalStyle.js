import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
      fill: currentColor;   // a property used in spinner.svg
      color: ${({ theme }) => theme.color.black};
      background-color: ${({ theme }) => theme.color.whisper};
    }
`;