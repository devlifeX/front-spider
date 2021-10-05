import * as React from "react";
import { ThemeOptions, ListItemIcon, Toolbar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Link } from "gatsby";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShareIcon from "@mui/icons-material/Share";

const HeaderTag = styled("header")(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${theme.palette.primary.main}
`
);

const HeaderContainer = styled("div")(
  ({ theme }) => `
  width: 100%;
  
  max-width: 1200px;
  height: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  `
);

const CustomToolbar = styled(Toolbar)(
  ({ theme }) => `
  padding: 0;
  color: ${theme.palette.primary.contrastText}
    `
);

const MyIMG = styled("img")`
  display: block;
  height: 48px;
  width: 150px;
`;

const Header = () => {
  return (
    <HeaderTag>
      <HeaderContainer>
        <Link to="/">
          <MyIMG width="150px" height="48px" src="/images/logo.svg" alt="" />
        </Link>
        <CustomToolbar>
          <IconButton
            size="large"
            // aria-label="show 4 new mails"
            color="inherit"
          >
            <DarkModeIcon />
          </IconButton>

          <IconButton
            size="large"
            // aria-label="show 4 new mails"
            color="inherit"
          >
            <ShareIcon />
          </IconButton>
        </CustomToolbar>
      </HeaderContainer>
    </HeaderTag>
  );
};

export default Header;
