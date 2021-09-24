import * as React from "react";

import { Typography, Stack } from "@mui/material";
import { LayoutWidthContainer } from "../shared";

const Footer = () => {
  return (
    <LayoutWidthContainer>
      <Stack
        component="footer"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          padding: "32px 0px 16px",
          gap: "24px",
          borderTop: "solid 1px #e7eaed",
          minHeight: "100px",
        }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="caption">سایت چکر فارسی</Typography>
        </Stack>
      </Stack>
    </LayoutWidthContainer>
  );
};
export default Footer;
