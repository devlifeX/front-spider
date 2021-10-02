import React, { useState } from "react";
import MainLayout from "../components/Layout";

import { Box, Typography, Stack, Link, Paper } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import UUID from "../components/UUID";
import CopyButton from "../components/CopyButton";
const UUIDGenerator = () => {
  const [v4, setV4] = useState(uuidv4());

  const v4Handler = () => {
    setV4(uuidv4());
  };
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          p: 3,
          flexDirection: "column",
          borderRadius: "4px",
        }}
      >
        <Typography sx={{ fontSize: "2rem" }} variant="h1">
          ساخت UUID آنلاین
        </Typography>

        <Typography
          sx={{ m: "15px 0 0 0", fontSize: "0.8rem", color: "GrayText" }}
          component="div"
        >
          UUID نسخه 4 شما
        </Typography>

        <Typography
          sx={{ m: "15px 0", fontSize: "1.5rem", textAlign: "center" }}
          component="div"
        >
          {v4}
        </Typography>

        <CopyButton content={v4} />

        <Stack sx={{ p: 2 }}>
          <Link href="#uuid-v4" underline="none" onClick={v4Handler}>
            ساخت یکی دیگه!
          </Link>
        </Stack>
      </Box>
      <UUID />
    </MainLayout>
  );
};

export default UUIDGenerator;
