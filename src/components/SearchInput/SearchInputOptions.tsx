import React, { useState } from "react";
import {
  Typography,
  Button,
  Popper,
  Paper,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  List,
  ListItem,
  ListSubheader,
  Divider,
  TextField,
  ClickAwayListener,
} from "@mui/material";
import Grow from "@mui/material/Grow";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InsertChartIcon from "@mui/icons-material/InsertChart";

const SearchInputOptions = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [basicAuth, setBasicAuth] = useState(false);

  const openMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(() => !open);
  };

  const closeMenuHandler = () => {
    setOpen(false);
    // setAnchorEl(null);
  };

  const id = open ? "simple-popper" : undefined;

  return (
    <ClickAwayListener onClickAway={closeMenuHandler}>
      <div style={{ direction: "rtl" }}>
        <Typography component="div">
          <Button size="large" onClick={openMenuHandler}>
            <ArrowDropDownIcon />
            تنظیمات
          </Button>
        </Typography>

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
                <List
                  subheader={<ListSubheader>تنظیمات سایت‌مپ</ListSubheader>}
                >
                  <ListItem>
                    <ListItemIcon>
                      <InsertChartIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      id="is-duplicate"
                      primary="حذف لینک‌های تکراری"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        //   onChange={handleToggle("wifi")}
                        //   checked={checked.indexOf("wifi") !== -1}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <InsertChartIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      id="is-recursive"
                      primary="همه لینک‌های داخلی هم استخراج شود"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        //   onChange={handleToggle("wifi")}
                        checked={true}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
                <Divider />
                <List
                  subheader={<ListSubheader>تنظیمات Basic Auth</ListSubheader>}
                >
                  <ListItem>
                    <ListItemIcon>
                      <InsertChartIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      id="is-duplicate"
                      primary="آیا Basic Auth فعال است"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        onChange={() => setBasicAuth(!basicAuth)}
                        checked={basicAuth}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>

                  {basicAuth && (
                    <>
                      <ListItem>
                        <TextField
                          variant="standard"
                          id="outlined-required"
                          label="نام‌کاربری"
                          placeholder="نام‌کاربری"
                          name="username"
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          variant="standard"
                          id="outlined-required"
                          label="کلمه‌عبور"
                          placeholder="کلمه‌عبور"
                          name="password"
                          type="password"
                        />
                      </ListItem>
                    </>
                  )}
                  <Divider />
                  <ListItem>
                    <Button
                      variant="contained"
                      onClick={() => closeMenuHandler()}
                    >
                      ذخیره
                    </Button>
                  </ListItem>
                </List>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

export default SearchInputOptions;
