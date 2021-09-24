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

const SearchInputOptions = () => {
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
            تنظیمات
          </Button>
        </Typography>
      </ClickAwayListener>
      <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        disablePortal
        id={id}
        placement="bottom-start"
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: "right bottom" }}
          >
            <Paper sx={{ width: { lg: "547.5px", zero: "393px" } }}>
              salam
              <MenuList>
                <MenuItem component={Link} to="/seo-checker">
                  <ListItemIcon>
                    <InsertChartIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>برسی سئو</ListItemText>
                </MenuItem>

                <MenuItem component={Link} to="/sitemap-tools">
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
    </div>
  );
};

export default SearchInputOptions;
