import * as React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";
import { blue } from "@mui/material/colors";

import CssReset from "./CssReset";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import "./fonts.css";

const typography = {
  typography: {
    fontFamily: "Dana",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["dana"],
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
    background: {
      default: "#f8f9fa",
    },
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

declare module "stylis-plugin-rtl" {
  export default function rtlPlugin(): string | undefined;
}

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const ThemeProvider = ({ children }: ThemeProps): JSX.Element => (
  <CacheProvider value={cacheRtl}>
    <MuiThemeProvider theme={createTheme(themeOptions)}>
      <CssReset />

      {children}
    </MuiThemeProvider>
  </CacheProvider>
);

export default ThemeProvider;
