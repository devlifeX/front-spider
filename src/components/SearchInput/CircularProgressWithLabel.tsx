import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    transition: "none",
  },
  circle: {
    transition: "none",
  },
});

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  const classes = useStyles();
  const { value } = props;
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        classes={classes}
        variant={value > 0 ? `determinate` : `indeterminate`}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}٪`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
