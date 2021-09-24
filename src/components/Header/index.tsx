import * as React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import { Link } from "gatsby";

import { LayoutWidthContainer, MyIMG } from "../shared";

import Menu from "./Menu";

const Header = () => {
  return (
    <AppBar color="default">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LayoutWidthContainer>
          <Toolbar variant="dense">
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <MyIMG width="150px" src="/images/logo.svg" alt="" />
              </Link>
            </Typography>
            <Menu />
          </Toolbar>
        </LayoutWidthContainer>
      </Box>
    </AppBar>
  );
};

export default Header;
