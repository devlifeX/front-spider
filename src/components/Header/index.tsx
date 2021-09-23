import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { LayoutWidthContainer } from "../shared";
import NavigationLinks from "./navigationLink";

const Header = () => {
  return (
    <AppBar color="default">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LayoutWidthContainer>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ابزار
            </Typography>

            <NavigationLinks />
          </Toolbar>
        </LayoutWidthContainer>
      </Box>
    </AppBar>
  );
};

export default Header;
