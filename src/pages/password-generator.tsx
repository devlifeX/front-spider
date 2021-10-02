import React, { useState, useEffect } from "react";
import MainLayout from "../components/Layout";

import {
  Box,
  Typography,
  Stack,
  Link,
  Slider,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@mui/material";

import { Helmet } from "react-helmet";
import CopyButton from "../components/CopyButton";
import generator from "generate-password-browser";

const marks = [
  {
    value: 16,
    label: "16",
  },
  {
    value: 32,
    label: "32",
  },
  {
    value: 64,
    label: "64",
  },
  {
    value: 128,
    label: "128",
  },
];

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const [state, setState] = useState({
    length: 16,
    symbols: true,
    numbers: true,
    lowercase: true,
    uppercase: true,
    excludeSimilarCharacters: true,
    exclude: `{ } [ ] ( ) / \ ' " \` ~ , ; : . < >`,
    isExclude: true,
    strict: true,
  });

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setState({
        ...state,
        length: newValue,
      });
      passwordHandler({ length: newValue });
    }
  };

  const passwordHandler = (extra = {}) => {
    const { isExclude, ...rest } = state;
    if (!isExclude) {
      rest.exclude = "";
    }
    setPassword(generator.generate({ ...rest, ...extra }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    passwordHandler();
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>ساخت کلمه‌عبور آنلاین - ساخت پسورد آنلاین</title>
        <meta
          name="description"
          content="ساخت کلمه‌ عبور آنلاین، با این ابزار به صورت آنلاین پسورد یا کلمه عبور خود را بسازید و در برنامه و سایت های دیگیر استفده کنید"
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
        <Typography sx={{ fontSize: "2rem", textAlign: "center" }} variant="h1">
          ساخت کلمه‌عبور آنلاین
        </Typography>

        {password && (
          <>
            <Typography
              sx={{
                m: "15px 0",
                fontSize: "1.5rem",
                textAlign: "center",
                overflowWrap: "anywhere",
              }}
              component="div"
            >
              {password}
            </Typography>

            <Stack spacing={2} sx={{ p: 2 }} direction="column">
              <CopyButton content={password} />

              <Link
                href="#generate-password"
                underline="none"
                onClick={passwordHandler}
              >
                ساخت یکی دیگه!
              </Link>
            </Stack>
          </>
        )}
        <Stack
          direction={{ zero: "column", sm: "row" }}
          sx={{
            width: { zero: "100%", sm: "50%" },
            marginTop: { zero: "20px", sm: "30px" },
          }}
        >
          <Typography
            id="non-linear-slider"
            sx={{ minWidth: "100px", textAlign: "center" }}
          >
            طول کلمه‌عبور:
          </Typography>

          <Slider
            value={state.length}
            min={6}
            step={1}
            max={128}
            scale={() => state.length}
            getAriaValueText={() => state.length.toString()}
            valueLabelFormat={() => state.length.toString()}
            onChange={handleChangeSlider}
            aria-labelledby="non-linear-slider"
            marks={marks}
            valueLabelDisplay="on"
          />
        </Stack>

        <FormControl
          required
          component="fieldset"
          sx={{ m: 1 }}
          variant="standard"
        >
          <FormLabel component="legend">حداقل یکی رو انتخاب کن</FormLabel>
          <Stack direction={{ zero: "column", sm: "row" }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.symbols}
                    onChange={handleChange}
                    name="symbols"
                  />
                }
                label="شامل نمادها باشد - (مثل @#$% )"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.numbers}
                    onChange={handleChange}
                    name="numbers"
                  />
                }
                label="شامل اعداد باشد - (مثل 123456 )"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.lowercase}
                    onChange={handleChange}
                    name="lowercase"
                  />
                }
                label="شامل حروف کوچک باشد - ( مثل abcdefgh )"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.uppercase}
                    onChange={handleChange}
                    name="uppercase"
                  />
                }
                label="شامل حروف بزرگ باشد - ( مثل ABCDEFGH )"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.excludeSimilarCharacters}
                    onChange={handleChange}
                    name="excludeSimilarCharacters"
                  />
                }
                label="حذف کارکتر‌های تکراری - ( مثل i, l, 1, L, o, 0, O )"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.isExclude}
                    onChange={handleChange}
                    name="isExclude"
                  />
                }
                label={`حذف کارکترهای مبهم - ( مثل  { } [ ] ( ) / \ ' " \` ~ , ; : . < > )`}
              />
            </FormGroup>
          </Stack>
        </FormControl>
      </Box>
    </MainLayout>
  );
};

export default PasswordGenerator;
