import React, { useState, useEffect } from "react";
import MainLayout from "../components/Layout";
import { SearchInput } from "../components/SearchInput";
import { AlertProps } from "../types";
import { Box, Typography, Alert } from "@mui/material";
import { io } from "socket.io-client";
import { useConfig } from "../config";
import SearchInputOptions from "../components/SearchInput/SearchInputOptions";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";

import SkeletonDataGrid from "../components/Skeleton";

const columns: GridColDef[] = [
  { field: "url", headerName: "لینک", minWidth: 405 },
  {
    field: "relativeTime",
    headerName: "آخرین بروزرسانی",
    minWidth: 200,
  },
];

function CustomToolbar() {
  return (
    <div style={{ direction: "ltr" }}>
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    </div>
  );
}

const SitemapExtractor = () => {
  const config = useConfig();
  /**
   * Socket
   */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [socket, setSocket] = useState<any>(null);
  const [progressbarValue, setProgressbarValue] = useState<number>(0);
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
  const [response, setResponse] = useState<any[]>([]);

  useEffect(() => {
    if (socket) return;

    const newSocket = io(config.backendURL, {
      reconnectionAttempts: 10,
      transports: ["websocket"],
    });

    setSocket(newSocket);
  }, [setSocket, socket]);

  useEffect(() => {
    const socketHandler = (message: any) => {
      if (message?.error) {
        setIsLoading(false);
        return setAlert({
          open: true,
          message: message?.error.message,
          type: "error",
        });
      }
      if (message?.done) {
        setText("");
        setIsLoading(false);
      }
      if (message) {
        setProgressbarValue(message.value as number);
      }
      if (message?.urls) {
        setResponse((oldReponse) => [...oldReponse, ...message.urls]);
      }
    };
    if (socket) {
      socket.on("sitemap", socketHandler);
    }
  }, [socket]);

  const onClickSearch = () => {
    if (!text) return;
    setResponse([]);
    setProgressbarValue(0);
    setIsLoading(true);
    setAlert({
      open: false,
      message: "",
    });

    socket.emit("sitemap", { url: text, isDuplicate: true });
  };

  const onClickOptions = () => {};

  const handleGetRowId = (e: any) => {
    return uuidv4();
  };

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
      {isLoading && response.length <= 0 && <SkeletonDataGrid />}
      {/*  {response.length > 0 && (
        <DataGrid
          columns={columns}
          rows={response}
          rowsCount={response.length}
        />
      )} */}
      {response.length > 0 && (
        <div style={{ height: 500, width: "100%", direction: "ltr" }}>
          <DataGrid
            rows={response}
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={[25, 50, 100]}
            checkboxSelection
            pagination
            getRowId={handleGetRowId}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
      )}
    </MainLayout>
  );
};

export default SitemapExtractor;
