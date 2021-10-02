import React, { useState, useEffect } from "react";
import MainLayout from "../components/Layout";

import { Box, Typography, Stack, Link } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import UUID from "../components/UUID";
import CopyButton from "../components/CopyButton";
import { Helmet } from "react-helmet";

const UUIDGenerator = () => {
  const [v4, setV4] = useState("");

  const init = () => {
    setV4(uuidv4());
  };

  useEffect(() => {
    init();
  }, []);

  const v4Handler = () => {
    setV4(uuidv4());
  };
  return (
    <MainLayout>
      <Helmet>
        <title>ساخت UUID آنلاین</title>
        <meta
          name="description"
          content="UUID رو به صورت آنلاین بسازید و استفاده کنید، با قابلیت ساخت UUID گروهی"
        />
      </Helmet>
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

      <Stack sx={{ p: 2, m: 2 }}>
        <div>
          <Typography sx={{ fontSize: "1.5rem" }} variant="h2">
            UUID نسخه چهار چیست؟
          </Typography>
          <Typography sx={{ m: "15px 0", textAlign: "center" }} component="p">
            مخفف universally unique identifier است. که بر اساس اعداد و حروف
            تصادفی ساخته می‌شود. شما میتونید به عنوان یه رشته منحصر به فرد ازش
            استفاده کنید
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: "1.5rem" }} variant="h2">
            UUID نسخه یک چیست؟
          </Typography>
          <Typography sx={{ m: "15px 0", textAlign: "center" }} component="p">
            مخفف universally unique identifier است. که از timestamp و MAC
            Address برای ساخت استفاده می‌کند شما میتونید به عنوان یه رشته منحصر
            به‌فرد ازش استفاده کنید
          </Typography>
        </div>
      </Stack>
    </MainLayout>
  );
};

export default UUIDGenerator;
