import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { LayoutWidthContainer } from "../shared";

const Header = () => {
  return (
    <AppBar color="primary">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LayoutWidthContainer>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </LayoutWidthContainer>
      </Box>
    </AppBar>
  );
};

export default Header;
