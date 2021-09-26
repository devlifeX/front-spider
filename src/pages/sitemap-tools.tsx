import React, { useState, useEffect } from "react";
import MainLayout from "../components/Layout";
import { SearchInput } from "../components/SearchInput";
import { AlertProps } from "../types";
import { Box, Typography, Alert } from "@mui/material";
import { io } from "socket.io-client";
import { useConfig } from "../config";
import SearchInputOptions from "../components/SearchInput/SearchInputOptions";
const SitemapExtractor = () => {
  const config = useConfig();
  /**
   * Socket
   */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [socket, setSocket] = useState<any>(null);
  const [progressbarValue, setProgressbarValue] = useState(0);

  useEffect(() => {
    let newSocket = null;
    if (!newSocket && !socket) {
      newSocket = io(config.backendURL, {
        transports: ["websocket", "polling"],
      });
      setSocket(newSocket);
    }
  }, [setSocket]);

  useEffect(() => {
    const messageListener = (message: any) => {
      console.log(message);
      if (message?.error) {
        return setAlert({
          open: true,
          message: message?.error.message,
          type: "error",
        });
      }
      if (message) {
        setIsLoading(!message.done);
        setProgressbarValue(message.value as number);
      }
    };
    if (socket) {
      socket.on("sitemap", messageListener);
    }
  }, [socket]);

  /**
   * rest
   */
  const [alert, setAlert] = useState<AlertProps>({
    open: false,
    type: "success",
    message: "",
  });
  const [text, setText] = useState("");

  const [options, setOptions] = useState({
    buttonShow: true,
    childrenShow: true,
  });
  const onClickSearch = () => {
    setAlert({
      open: false,
      message: "",
    });

    socket.emit("sitemap", { url: text, isDuplicate: true });
  };

  const onClickOptions = () => {};

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <SearchInput
          fns={{
            text,
            setText,
            onClickSearch,
            options,
            onClickOptions,
            isLoading,
            progressbarValue,
          }}
        >
          <SearchInputOptions />
        </SearchInput>
        {alert.open && <Alert severity={alert.type}>{alert.message}</Alert>}
        <Typography
          variant="h5"
          sx={{ m: "15px 0 15px 0", textAlign: "center" }}
        >
          سایت‌مپ خود را مشاهده، برسی و لینک‌های ان را خارج کنید
        </Typography>
        <Typography
          component="p"
          sx={{ m: "15px 0 15px 0", width: { sm: "100%", lg: "60%" } }}
        >
          میخای مطمئن بشی سایتت سایت‌مپش درسته و چه لینکهایی توش داره؟ میخای همه
          لینکهای سایتت رو که گوگل میبینه یکجا داشته باشی؟ سایتت روی سرور
          استیجینگ هست؟ نگران نباش روی چرخ‌دنده کلیک کن.{" "}
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default SitemapExtractor;
