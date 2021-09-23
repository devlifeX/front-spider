import * as React from "react";

import { Typography, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      component="footer"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        padding: "32px 0px 16px",
        gap: "24px",
        bgcolor: "primary.main",
        maxHeight: "100px",
      }}
    >
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="caption">ابزار</Typography>
        <Typography mt={1} variant="caption">
          1400
        </Typography>
      </Stack>
    </Stack>
  );
};
export default Footer;
