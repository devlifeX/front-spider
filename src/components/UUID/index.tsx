import React, { useState } from "react";

import {
  Box,
  Typography,
  Stack,
  Link,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";

type item = {
  key: string;
  value: string;
};
const items: item[] = [
  { key: "(براساس timestamp) - نسخه یک", value: "v1" },
  //   { key: "(براساس MD5) - نسخه سه", value: "v3" },
  { key: "(براساس random) - نسخه چهار", value: "v4" },
  //   { key: "( براساس SHA-1) - نسخه پنج", value: "v5" },
];

const itemBuilder = () => {
  return items.map((i, key) => (
    <MenuItem key={key} value={i.value} selected={key === 0}>
      {i.key}
    </MenuItem>
  ));
};
import CopyButton from "../CopyButton";

const uuidItemBuilder = (uuids: string[]) => {
  return uuids.map((i, key) => <div key={key}>{i}</div>);
};

const generateUUID = (count: number, fn: () => string): string[] => {
  let allowd = count;
  let str: string[] = [];
  const MAX = 100;
  if (count > MAX) {
    allowd = MAX;
  }
  for (let i = 1; i <= allowd; i++) {
    str.push(fn());
  }
  return str;
};

const UUIDGenerator = () => {
  const [uuid, setUUID] = useState<string[]>([]);
  const [type, setType] = useState("");
  const [count, setCount] = useState(1);
  const [error, setError] = useState(false);

  const txtHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      parseInt(event.target.value) <= 0 ||
      parseInt(event.target.value) > 100
    ) {
      setError(true);
    } else {
      setError(false);
      setCount(parseInt(event.target.value));
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      UUIDHandler(type, count);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    UUIDHandler(event.target.value, count);
    setType(event.target.value);
  };

  const UUIDHandler = (type: string, count: number) => {
    switch (type) {
      case "v1":
        setUUID(generateUUID(count, uuidv1));
        break;

      case "v4":
        setUUID(generateUUID(count, uuidv4));
        break;
    }
  };
  return (
    <Box
      sx={{
        m: "25px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        p: 3,
        flexDirection: "column",
        borderRadius: "4px",
      }}
    >
      <Typography
        sx={{ fontSize: "1.5rem", textAlign: "center", m: 2 }}
        variant="h2"
      >
        ساخت UUID آنلاین در نسخه های یک و چهار
      </Typography>
      <div>
        <Stack direction={{ zero: "column", sm: "row" }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              نسخه UUID
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={type}
              label="نسخه UUID"
              onChange={handleChange}
            >
              {itemBuilder()}
            </Select>
            <FormHelperText>
              نسخه UUID که میخای بسازی رو از لیست بالا انتخاب کن
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              label="چه تعداد"
              autoComplete="off"
              type="number"
              defaultValue={count}
              onChange={txtHandler}
              onKeyPress={handleKeyPress}
              InputProps={{
                inputProps: { min: 1, max: 100 },
              }}
              variant="outlined"
              error={error}
              helperText={error ? "بازه بین ۱ تا ۱۰۰" : ""}
            />
            <FormHelperText>
              تعدادی که میخای رو مشخص کن (حداکثر ۱۰۰)
            </FormHelperText>
          </FormControl>
        </Stack>
      </div>
      {type && (
        <>
          <CopyButton content={uuid} />
          <Stack sx={{ p: 2 }}>
            <Link
              href="#bulk"
              underline="none"
              onClick={() => UUIDHandler(type, count)}
            >
              ساخت یسری دیگه!
            </Link>
          </Stack>
          <Typography
            sx={{ m: "15px 0", fontSize: "1.5rem", textAlign: "center" }}
            component="div"
          >
            {uuidItemBuilder(uuid)}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default UUIDGenerator;
