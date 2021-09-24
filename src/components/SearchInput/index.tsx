import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

type SearchInputProps = {
  fns: any;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  fns,
  children,
}): JSX.Element => {
  const { text, setText, onClickSearch, options, onClickOptions } = fns;

  return (
    <Paper
      component="div"
      sx={{
        m: " 0 0 40px 0",
        display: "flex",
        alignItems: "center",
        width: { lg: "50%", sm: "100%" },
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
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onClickSearch}
      >
        <SearchIcon />
      </IconButton>
      {options.buttonShow && (
        <>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
            onClick={onClickOptions}
          >
            <SettingsIcon />
          </IconButton>
          {options.childrenShow && children}
        </>
      )}
    </Paper>
  );
};
