import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonDataGrid() {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
      }}
    >
      <Skeleton sx={{ height: "60px" }} />
      <Skeleton sx={{ height: "60px" }} animation="wave" />
      <Skeleton sx={{ height: "60px" }} />
      <Skeleton sx={{ height: "60px" }} animation="wave" />
      <Skeleton sx={{ height: "60px" }} />
    </Box>
  );
}
