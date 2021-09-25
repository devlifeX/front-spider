import React from "react";
import { Global, css } from "@emotion/react";

import { CssBaseline } from "@mui/material";

const CssResetStyle = css`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    min-width: 100%;
  }
  #___gatsby #gatsby-focus-wrapper {
    min-height: 100vh;
    min-width: 100%;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

const CssReset = (): JSX.Element => (
  <>
    <CssBaseline />
    <Global styles={CssResetStyle} />
  </>
);

export default CssReset;
