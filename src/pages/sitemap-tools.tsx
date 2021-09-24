import * as React from "react";
import MainLayout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import { Typography, Box } from "@mui/material";

// markup
const SitemapExtractor = () => {
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
        <SearchInput />
        <Typography variant="h5" sx={{ m: "0 0 35px 0", textAlign: "center" }}>
          سایت‌مپ خود را مشاهده، برسی و لینک‌های ان را خارج کنید
        </Typography>
        <Typography
          component="p"
          sx={{ m: "0 0 35px 0", width: { sm: "100%", lg: "60%" } }}
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
