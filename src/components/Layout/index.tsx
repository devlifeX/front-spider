import * as React from "react";

import { Box } from "@mui/material";

import SEO from "../SEO";

import Footer from "../Footer";
import Header from "../Header";
import ThemeProvider from "../../theme";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ThemeProvider>
    <SEO />
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        pt: 12,

        display: "grid",
        gridTemplateColumns: "100%",
        gap: { zero: 8, sm: 10 },
      }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  </ThemeProvider>
);

export default MainLayout;
