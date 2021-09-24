import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Popper,
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  ClickAwayListener,
  ListItemText,
} from "@mui/material";
import Grow from "@mui/material/Grow";

import MenuIcon from "@mui/icons-material/Menu";
import HandymanIcon from "@mui/icons-material/Handyman";
import { Link } from "gatsby";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InsertChartIcon from "@mui/icons-material/InsertChart";
const Menu = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const closeMenuHandler = () => {
    setOpen(false);
    // setAnchorEl(null);
  };

  const id = open ? "simple-popper" : undefined;

  return (
    <>
      <ClickAwayListener onClickAway={closeMenuHandler}>
        <Typography component="div">
          <Button size="large" onClick={handleClick}>
            <ArrowDropDownIcon />
            ابزارها
          </Button>
        </Typography>
      </ClickAwayListener>
      <Popper open={open} anchorEl={anchorEl} transition disablePortal id={id}>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "center top" }}>
            <Paper sx={{ width: 180, maxWidth: "100%" }}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <InsertChartIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>برسی سئو</ListItemText>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <HandymanIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>ابزار سایت‌مپ</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default Menu;
