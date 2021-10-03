import * as React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import { Link } from "gatsby";

import { LayoutWidthContainer, MyIMG } from "../shared";

import Menu from "./Menu";

import InternetConnectionCheck from "../InternetConnectionCheck";
const Header = () => {
  return (
    <>
      <InternetConnectionCheck />
      <AppBar sx={{ backgroundColor: "primary.contrastText" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <LayoutWidthContainer>
            <Toolbar variant="dense">
              <Typography component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">
                  <MyIMG
                    width="150px"
                    src="/images/logo.svg"
                    width="150"
                    height="27"
                    alt=""
                  />
                </Link>
              </Typography>
              <Menu />
            </Toolbar>
          </LayoutWidthContainer>
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
