import * as React from "react";

import { Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterTag = styled("footer")(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
`
);

const FooterContainer = styled("div")(
  ({ theme }) => `
  width: 100%;
  
  max-width: 1200px;
  height: 80px;
 
  
  `
);

const Footer = () => {
  return (
    <FooterTag>
      <FooterContainer>
        <Stack component="nav" spacing={2}>
          <Typography variant="caption">2021</Typography>
        </Stack>
      </FooterContainer>
    </FooterTag>
  );
};
export default Footer;
