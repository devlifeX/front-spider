import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

const InternetConnectionCheck = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if ("onLine" in navigator) {
      window.addEventListener("online", () => setOpen(false));
      window.addEventListener("offline", () => setOpen(true));
    }
  }, []);

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          شما به اینترنت متصل نیستید!
        </Alert>
      </Snackbar>
    </>
  );
};

export default InternetConnectionCheck;
