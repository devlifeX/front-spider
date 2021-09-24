import React, { useState } from "react";
import MainLayout from "../components/Layout";
import { SearchInput } from "../components/SearchInput";
import { AlertProps } from "../types";
import { Box, Typography, Alert } from "@mui/material";
// markup
const SitemapExtractor = () => {
  const [alert, setAlert] = useState<AlertProps>({
    open: false,
    type: "success",
    message: "",
  });
  const [text, setText] = useState("");
  const [options, setOptions] = useState({
    show: true,
    cb: () => {},
  });
  const onClickSearch = () => {
    setAlert({
      open: true,
      message: text,
    });
  };

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchInput fns={{ text, setText, onClickSearch, options }} />
        {alert.open && <Alert severity={alert.type}>{alert.message}</Alert>}
        <Typography
          variant="h5"
          sx={{ m: "15px 0 15px 0", textAlign: "center" }}
        >
          سایت‌مپ خود را مشاهده، برسی و لینک‌های ان را خارج کنید
        </Typography>
        <Typography
          component="p"
          sx={{ m: "15px 0 15px 0", width: { sm: "100%", lg: "60%" } }}
        >
          میخای مطمئن بشی سایتت سایت‌مپش درسته و چه لینکهایی توش داره؟ میخای همه
          لینکهای سایتت رو که گوگل میبینه یکجا داشته باشی؟ سایتت روی سرور
          استیجینگ هست؟ نگران نباش روی چرخ‌دنده کلیک کن.{" "}
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default SitemapExtractor;
