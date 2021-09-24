import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
export default function SearchInput() {
  return (
    <Paper
      component="form"
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
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <SettingsIcon />
      </IconButton>
    </Paper>
  );
}
