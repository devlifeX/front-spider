import * as React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

const LayoutWidthContainer = styled.div`
  width: 100%;
  padding: 0 16px 0 16px;
  justify-self: center;

  max-width: calc(1144px + 2 * 16px);
`;

const Header = () => {
  return (
    <AppBar color="primary">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LayoutWidthContainer>
          <Toolbar
            sx={{ justifyContent: "space-between", height: 6 }}
            variant="dense"
          ></Toolbar>
        </LayoutWidthContainer>
      </Box>
    </AppBar>
  );
};

export default Header;
