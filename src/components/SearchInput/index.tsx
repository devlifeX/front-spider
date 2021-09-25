import React, { useState } from "react";
import { Divider, IconButton, Paper, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

type SearchInputProps = {
  fns: any;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  fns,
  children,
}): JSX.Element => {
  const { text, setText, onClickSearch, options, onClickOptions } = fns;

  const [isLoading, setisLoading] = useState(false);
  return (
    <Paper
      component="div"
      sx={{
        m: "0 0 40px 0",
        display: "flex",
        alignItems: "center",
        width: { lg: "50%", xs: "100%" },
        direction: "ltr",
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          p: "5px 16px 0 16px",
          lineHeight: "26px",
          fontSize: "20px",
        }}
        placeholder="https://"
        inputProps={{ "aria-label": "آدرس سایت" }}
        value={text}
        type="url"
        name="url"
        onChange={(e) => setText(e.target.value)}
        disabled={isLoading}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onClickSearch}
        disabled={isLoading}
      >
        <Box
          sx={{
            height: "40px",
            width: "40px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <CircularProgressWithLabel value={10} />
          ) : (
            <SearchIcon sx={{ height: "30px", width: "30px" }} />
          )}
        </Box>
      </IconButton>
      {options.buttonShow && (
        <>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          {/* <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
            onClick={onClickOptions}
          >
            <SettingsIcon />
          </IconButton> */}
          {options.childrenShow && children}
        </>
      )}
    </Paper>
  );
};
