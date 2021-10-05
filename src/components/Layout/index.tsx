import * as React from "react";

import { Box } from "@mui/material";
import { MainLayoutWidthContainer } from "../shared";
import CssBaseline from "@mui/material/CssBaseline";

import SEO from "../SEO";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import ThemeProvider from "../../theme";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ThemeProvider>
    <CssBaseline />
    <SEO />
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        backgroundColor: "primary.light",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  </ThemeProvider>
);

export default MainLayout;
