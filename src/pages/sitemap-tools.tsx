import React, { useState, useEffect } from "react";
import MainLayout from "../components/Layout";
import { SearchInput } from "../components/SearchInput";
import { AlertProps } from "../types";
import { Box, Typography, AlertColor } from "@mui/material";
import { io } from "socket.io-client";
import { useConfig } from "../config";
import SearchInputOptions from "../components/SearchInput/SearchInputOptions";
import SeoCard from "../components/SeoCard";
import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridLinkOperator,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import { isValidateURL } from "../utils";
import SkeletonDataGrid from "../components/Skeleton";
import MySnakbar from "../components/shared/Snakbar";
import Details from "../components/Details";
import { useReducerWithActionCreator } from "../localReducer";
import { Helmet } from "react-helmet";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  footerContainer: {
    direction: "rtl",
  },
});

const columns: GridColDef[] = [
  {
    field: "url",
    headerName: "لینک",
    minWidth: 405,
    type: "string",
    editable: true,
  },
  {
    field: "relativeTime",
    headerName: "آخرین بروزرسانی",
    minWidth: 130,
    type: "string",
    sortable: false,
  },
  {
    field: "lastmod",
    headerName: "آخرین بروزرسانی(میلادی)",
    minWidth: 205,
    type: "date",
  },
  {
    field: "changefreq",
    headerName: "بازه تغییر",
    minWidth: 105,
    type: "string",
  },
  { field: "priority", headerName: "الویت", minWidth: 105, type: "string" },
];

const filterModel: GridFilterModel = {
  items: [
    {
      id: 1,
      columnField: "relativeTime",
      operatorValue: "contains",
      value: "ساعت",
    },
  ],
  linkOperator: GridLinkOperator.Or,
};

let filter: GridFilterModel = { items: [] };

function CustomToolbar() {
  return (
    <div style={{ direction: "rtl" }}>
      <GridToolbarContainer>
        <GridToolbarExport />
        {/*   <Button onClick={() => (filter = filterModel)}>
          نمایش تغییرات امروز
        </Button>
        <Button onClick={() => (filter = { items: [] })}>
          بازنشانی همه فیلترها{" "}
        </Button> */}
      </GridToolbarContainer>
    </div>
  );
}

const SitemapExtractor = () => {
  const config = useConfig();
  /**
   * Style
   */
  const gridClasses = useStyles();
  /**
   * Socket
   */
  const [socket, setSocket] = useState<any>(null);
  const [alert, setAlert] = useState<AlertProps & { type?: AlertColor }>({
    open: false,
    type: "success",
    message: "",
  });

  const [state, ac] = useReducerWithActionCreator();

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
      ac.setStart(true);

      if (message?.hasError) {
        ac.setLoading(false);
        ac.setError({
          hasError: message?.hasError,
          errorMessage: message?.errorMessage,
        });
        return setAlert({
          open: true,
          message: message?.errorMessage,
          type: "error",
        });
      }

      if (message?.done) {
        ac.resetAfterDone();
        setAlert({
          open: true,
          message: `کار سایت‌مپ تموم شد`,
          type: "info",
        });
      }
      if (message) {
        ac.setProgressbar(message.value as number);
      }
      if (message?.meta) {
        ac.setMeta(message.meta);
      }
      if (message?.urls) {
        ac.updateCount(message.count as number);
        ac.updateMeta({
          key: "وضعیت",
          value: message.done ? "تموم شد" : "درحال کار",
        });
        ac.setRes(message);
      }
    };
    if (socket) {
      socket.on("sitemap", socketHandler);
    }
  }, [socket]);

  const onClickSearch = () => {
    if (!state.text) return;
    if (!isValidateURL(state.text)) {
      return setAlert({
        open: true,
        message: "لینک وارد شده صحیح نیست",
        type: "error",
      });
    }

    const text = state.text;
    ac.resetAll();
    ac.setText(text);
    ac.setLoading(true);

    setAlert({
      open: false,
      message: "",
    });

    socket.emit("sitemap", {
      url: state.text,
      isDuplicate: state.isDuplicate,
      basicAuth: state.basicAuth,
    });
  };

  const onClickOptions = () => {};

  const handleGetRowId = () => {
    return uuidv4();
  };

  return (
    <MainLayout>
      <Helmet>
        <title>ابزار سایت‌مپ</title>
        <meta
          name="description"
          content="سایت‌مپ خود را مشاهده، برسی و لینک‌های آن را استخراج کنید. "
        />
      </Helmet>
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
            text: state.text,
            setText: ac.setText,
            onClickSearch,
            options: state.options,
            onClickOptions,
            isLoading: state.isLoading,
            progressbarValue: state.progressbarValue,
          }}
        >
          <SearchInputOptions
            basicAuth={state.basicAuth}
            setBasicAuth={ac.updateBasicAuth}
            isDuplicate={state.isDuplicate}
            setIsDuplicate={ac.setIsDuplicate}
          />
        </SearchInput>
        {alert.open && (
          <MySnakbar open={alert.open} type={alert.type}>
            {alert.message}
          </MySnakbar>
        )}
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

      {state.isLoading && !state.start && <SkeletonDataGrid />}

      {!state.error.hasError && state.start && (
        <>
          <Details
            meta={state.meta}
            extraMeta={[{ key: "تعدادکل", value: state.count.toString() }]}
          >
            <SeoCard />
          </Details>
          <div style={{ height: 500, width: "100%", direction: "ltr" }}>
            <DataGrid
              classes={gridClasses}
              rows={state.res.urls}
              columns={columns}
              pageSize={50}
              // rowsPerPageOptions={[50, 100, 200]}
              checkboxSelection
              pagination
              density="compact"
              getRowId={handleGetRowId}
              components={{
                Toolbar: CustomToolbar,
              }}
            />
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default SitemapExtractor;
