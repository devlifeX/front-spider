import * as React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";
import { blue, pink, grey } from "@mui/material/colors";

import CssReset from "./CssReset";
import CssBaseline from "@mui/material/CssBaseline";

import DanaWoff from "../static/fonts/dana-fanum-regular.woff";
import DanaWoff2 from "../static/fonts/dana-fanum-regular.woff2";
import DanaEOT from "../static/fonts/dana-fanum-regular.eot";

const dana = {
  fontFamily: "Dana",
  fontStyle: "normal",
  fontDisplay: "auto",
  fontWeight: 400,
  src: `
    local('Dana'),
    local('dana-fanum'),
    url(${DanaWoff2}) format('woff2'),
    url(${DanaEOT}),
    url(${DanaWoff}) format('woff')
  `,
};

const typography = {
  typography: {
    fontFamily: "Dana",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [dana],
      },
    },
  },
};
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    zero: true;
    xs: false;
    sm: true;
    md: false;
    lg: true;
    xl: false;
  }
}

// Materil UI Theme setup
export const themeOptions: ThemeOptions = {
  ...typography,
  direction: "rtl",
  palette: {
    primary: { main: blue[500] },
    secondary: { main: "#f8f9fa" },
  },
  breakpoints: {
    values: {
      zero: 0,
      sm: 564,
      lg: 1100,
    },
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProps): JSX.Element => (
  <MuiThemeProvider theme={createTheme(themeOptions)}>
    <CssReset />
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
