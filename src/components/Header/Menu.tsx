import React, { useState } from "react";
import {
  Typography,
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

import HandymanIcon from "@mui/icons-material/Handyman";
import { Link } from "gatsby";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PasswordIcon from "@mui/icons-material/Password";
import LinkIcon from "@mui/icons-material/Link";
const Menu = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(() => true);
  };

  const closeMenuHandler = () => {
    setOpen(false);
    // setAnchorEl(null);
  };

  const id = open ? "simple-popper" : undefined;

  return (
    <div onMouseLeave={closeMenuHandler}>
      <ClickAwayListener onClickAway={closeMenuHandler}>
        <Typography component="div">
          <Button
            size="large"
            onClick={openMenuHandler}
            onMouseEnter={openMenuHandler}
          >
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
                <MenuItem component={Link} to="/sitemap-tools">
                  <ListItemIcon>
                    <HandymanIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>ابزار سایت‌مپ</ListItemText>
                </MenuItem>
              </MenuList>

              <MenuItem component={Link} to="/utm">
                <ListItemIcon>
                  <LinkIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>ساخت UTM</ListItemText>
              </MenuItem>

              <MenuItem component={Link} to="/password-generator">
                <ListItemIcon>
                  <PasswordIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>تولید کلمه‌عبور</ListItemText>
              </MenuItem>

              <MenuItem component={Link} to="/uuid">
                <ListItemIcon>
                  <PlaylistAddCheckIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>ساخت UUID</ListItemText>
              </MenuItem>

              <MenuItem component={Link} to="/seo-checker">
                <ListItemIcon>
                  <InsertChartIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>برسی سئو</ListItemText>
              </MenuItem>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Menu;
