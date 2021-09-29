import { AlertColor } from "@mui/material";

export interface AlertProps {
  open: boolean;
  type?: AlertColor;
  message: string;
}

export interface SitemapResponseMeta {
  key: string;
  value: string;
  type?: string;
}

export interface OptionsProps {
  buttonShow: boolean;
  childrenShow: boolean;
}
export interface SitemapResponse {
  index: number;
  total: number;
  urls: any[];
  done: boolean;
}
export interface BasicAuthProps {
  hasBasicAuth: boolean;
  basicAuthUsername: string;
  basicAuthPassword: string;
}
export interface State {
  start: boolean;
  isLoading: boolean;
  progressbarValue: number;
  options: OptionsProps;
  res: SitemapResponse;
  text: string;
  count: number;
  meta: SitemapResponseMeta[];
  basicAuth: BasicAuthProps;
}

export enum ActionTypes {
  SET_TEXT = "SET_TEXT",
  SET_PROGRESSBAR = "SET_PROGRESSBAR",
  SET_RESPONSE = "SET_RESPONSE",
  SET_LOADING = "SET_LOADING",
  SET_META = "SET_META",
  SET_START = "SET_START",

  UPDATE_BASICAUTH = "UPDATE_BASICAUTH",
  UPDATE_META = "UPDATE_META",
  UPDATE_COUNT = "UPDATE_COUNT",

  RESET_ALL = "RESET_ALL",
}
export interface Action {
  type: ActionTypes;
  payload: any;
}
