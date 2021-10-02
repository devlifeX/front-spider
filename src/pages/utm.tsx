import React, { useState, useEffect } from "react";
import MainLayout from "../components/Layout";

import {
  Box,
  Typography,
  Stack,
  Link,
  FormControl,
  FormHelperText,
  TextField,
  Paper,
} from "@mui/material";

import { isURL } from "../utils";

import { Helmet } from "react-helmet";
import CopyButton from "../components/CopyButton";

const UTMGenerator = () => {
  const [output, setOutput] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState({
    hasError: true,
    errorMessage: "برای ساخت UTM باید لینک را وارد کنید",
  });
  const [state, setState] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_id: "",
    utm_term: "",
    utm_content: "",
  });

  const urlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const campaignHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  };

  const outputHandler = () => {
    if (url.length <= 0) {
      setError({
        hasError: true,
        errorMessage: "برای ساخت UTM باید لینک را وارد کنید",
      });

      return;
    }

    if (!isURL(url)) {
      setError({
        hasError: true,
        errorMessage: "یک لینک معتبر وارد کنید",
      });

      return;
    }

    const requaierd = ["utm_source", "utm_medium", "utm_campaign"];
    if (
      Object.values(requaierd).every((key) => Object(state)[key].length <= 0)
    ) {
      setError({
        hasError: true,
        errorMessage:
          "برای ساخت لینک کمپین حداقل یکی از موارد ضرروی را وارد کنید",
      });

      return;
    }

    setError({
      hasError: false,
      errorMessage: "",
    });

    const output = Object.entries(state)
      .reduce<string[]>((acc, i) => {
        if (requaierd.includes(i[0]) && i[1].trim().length <= 0) {
          const plus = i[1].trim().length <= 0 ? " " : i[1];
          acc.push(`${i[0]}=${plus.replace(/ /g, "+")}`);
        } else if (!requaierd.includes(i[0]) && i[1].trim().length <= 0) {
          return acc;
        } else {
          acc.push(i.join("="));
        }
        return acc;
      }, [])
      .join("&");
    setOutput(`${url}?${output}`);
  };

  useEffect(() => {
    outputHandler();
  }, [state, url]);

  return (
    <MainLayout>
      <Helmet>
        <title>ساخت UTM </title>
        <meta name="description" content="ساخت UTM برای لینک کمپین" />
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
          minWidth: { zero: "100%", sm: "50%" },
        }}
      >
        <Typography sx={{ fontSize: "2rem", textAlign: "center" }} variant="h1">
          ساخت UTM
        </Typography>

        <Stack
          direction={{ zero: "column", sm: "row" }}
          sx={{
            width: { zero: "100%", sm: "50%" },
            marginTop: { zero: "20px", sm: "30px" },
          }}
        >
          <Typography
            id="non-linear-slider"
            sx={{ minWidth: "100px" }}
            component="p"
            variant="subtitle1"
          >
            این ابزار به شما اجازه می‌دهد که به راحتی پامترهای لینک‌های کمپین
            تبلیغاتی خود را بسازی و در ابزار گوگل آنالیتیکز اندازه‌گیری کنید.
            برای اطلاعات بیشتر{" "}
            <Link
              underline="none"
              href="https://support.google.com/analytics/answer/1033863"
              target="_blank"
            >
              به این صفحه{" "}
            </Link>
            مراجعه کنید.
          </Typography>
        </Stack>

        <FormControl
          component="fieldset"
          sx={{ m: 1, width: { zero: "100%", sm: "50%" } }}
          variant="standard"
        >
          <FormHelperText>
            لینک و اطلاعات کمپین خود را در کادر زیر وارد کنید
          </FormHelperText>
          <FormHelperText>فیلدهای *ستاره‌دار را حتما پر کنید</FormHelperText>
          <Stack
            direction="column"
            spacing={3}
            sx={{
              margin: "auto",
              marginTop: 3,
              width: "100%",
            }}
          >
            <TextField
              style={{ direction: "ltr" }}
              required
              label="لینک (URL)"
              id="url"
              name="url"
              type="url"
              size="small"
              fullWidth
              value={url}
              onChange={urlHandler}
              helperText="آدرس کامل (مثال https://www.example.com)"
            />

            <TextField
              style={{ direction: "ltr" }}
              label="آی‌دی کمپین (campaign id)  "
              id="utm_id"
              size="small"
              fullWidth
              helperText="Campaign id"
              value={state.utm_id}
              onChange={campaignHandler}
            />

            <TextField
              style={{ direction: "ltr" }}
              required
              label="ارجاع دهنده کمپین (campaign source)"
              id="utm_source"
              size="small"
              fullWidth
              helperText="ارجاع دهنده (مثال Google, newsletter)"
              value={state.utm_source}
              onChange={campaignHandler}
            />

            <TextField
              style={{ direction: "ltr" }}
              required
              label="رسانه کمپین (campaign medium)"
              id="utm_medium"
              size="small"
              fullWidth
              helperText="رسانه کمپین (مثال cpc, banner, email)"
              value={state.utm_medium}
              onChange={campaignHandler}
            />

            <TextField
              style={{ direction: "ltr" }}
              required
              label="نام کمپین (campaign name)"
              id="utm_campaign"
              size="small"
              fullWidth
              helperText="نام محصول، کدتخفیف (مثال spring_sale)"
              value={state.utm_campaign}
              onChange={campaignHandler}
            />

            <TextField
              style={{ direction: "ltr" }}
              label="دسته کمپین (campaign term)  "
              id="utm_term"
              size="small"
              fullWidth
              helperText="کلمات کلیدی پرداخت شده را شناسایی کنید  "
              value={state.utm_term}
              onChange={campaignHandler}
            />

            <TextField
              style={{ direction: "ltr" }}
              label="محتوای کمپین (campaign content)  "
              id="utm_content"
              size="small"
              fullWidth
              helperText="برای تمایز تبلیغات استفاده کنید"
              value={state.utm_content}
              onChange={campaignHandler}
            />
          </Stack>
        </FormControl>

        <Paper sx={{ p: 2, backgroundColor: "wheat" }}>
          {error.hasError ? (
            error.errorMessage
          ) : (
            <>
              <Stack
                spacing={2}
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                direction="column"
              >
                <Typography
                  sx={{
                    m: "15px 0",
                    fontSize: "1.2rem",
                    direction: "rtl",
                    overflowWrap: "anywhere",
                  }}
                  component="div"
                >
                  {output}
                </Typography>

                <CopyButton content={output} />
              </Stack>
            </>
          )}
        </Paper>
      </Box>
    </MainLayout>
  );
};

export default UTMGenerator;
