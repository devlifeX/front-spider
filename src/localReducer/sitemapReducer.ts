import { Dispatch, useReducer } from "react";
import { State, Action, ActionTypes, MyError } from "../types";

export function init(): State {
  return {
    start: false,
    isLoading: false,
    progressbarValue: 0,
    options: {
      buttonShow: true,
      childrenShow: true,
    },
    res: {
      index: 0,
      total: 0,
      urls: [],
      done: false,
    },
    meta: [],
    text: "",
    count: 0,
    basicAuth: {
      hasBasicAuth: false,
      basicAuthUsername: "",
      basicAuthPassword: "",
    },
    isDuplicate: true,
    error: {
      hasError: false,
      errorMessage: "",
    },
  };
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_TEXT:
      return { ...state, text: action.payload };
    case ActionTypes.SET_PROGRESSBAR:
      return { ...state, progressbarValue: action.payload };
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ActionTypes.SET_START:
      return { ...state, start: action.payload };

    case ActionTypes.SET_IS_DUPLICATE:
      return { ...state, isDuplicate: action.payload };

    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };

    case ActionTypes.SET_RESPONSE:
      const urls = [...state.res.urls, ...action.payload.urls];
      const newRes = { ...action.payload, urls: urls };
      return { ...state, res: newRes };
    case ActionTypes.SET_META:
      return { ...state, meta: action.payload };

    case ActionTypes.UPDATE_BASICAUTH:
      return { ...state, basicAuth: { ...state.basicAuth, ...action.payload } };

    case ActionTypes.UPDATE_META:
      const allExceptNew = state.meta.filter(
        (i) => i.key !== action.payload?.key
      );
      return { ...state, meta: [...allExceptNew, action.payload] };

    case ActionTypes.UPDATE_COUNT:
      return { ...state, count: state.count + action.payload };

    case ActionTypes.RESET_ALL:
      return action.payload;
    default:
      throw new Error("Local reducer error");
  }
}

interface ActionCreator {
  setText: (payload: string) => void;
  setProgressbar: (payload: number) => void;
  setLoading: (payload: boolean) => void;
  setStart: (payload: boolean) => void;
  setError: (payload: MyError) => void;
  setIsDuplicate: (payload: boolean) => void;
  setRes: (payload: any) => void;
  setMeta: (payload: any) => void;
  updateBasicAuth: (payload: any) => void;
  updateMeta: (payload: any) => void;
  updateCount: (payload: number) => void;
  resetAfterDone: () => void;
  resetAll: () => void;
}
const actionCreator = (dispatch: Dispatch<Action>) => () => ({
  setText: (payload: string) =>
    dispatch({ type: ActionTypes.SET_TEXT, payload }),

  setProgressbar: (payload: number) =>
    dispatch({ type: ActionTypes.SET_PROGRESSBAR, payload }),

  setLoading: (payload: boolean) =>
    dispatch({ type: ActionTypes.SET_LOADING, payload }),

  setStart: (payload: boolean) =>
    dispatch({ type: ActionTypes.SET_START, payload }),

  setIsDuplicate: (payload: boolean) =>
    dispatch({ type: ActionTypes.SET_IS_DUPLICATE, payload }),

  setRes: (payload: any) =>
    dispatch({ type: ActionTypes.SET_RESPONSE, payload }),

  setMeta: (payload: any) => dispatch({ type: ActionTypes.SET_META, payload }),

  setError: (payload: MyError) =>
    dispatch({ type: ActionTypes.SET_ERROR, payload }),

  updateBasicAuth: (payload: any) =>
    dispatch({ type: ActionTypes.UPDATE_BASICAUTH, payload }),

  updateMeta: (payload: any) =>
    dispatch({ type: ActionTypes.UPDATE_META, payload }),

  updateCount: (payload: number) =>
    dispatch({ type: ActionTypes.UPDATE_COUNT, payload }),

  resetAfterDone: () => {
    dispatch({ type: ActionTypes.SET_TEXT, payload: "" });
    dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    dispatch({ type: ActionTypes.SET_PROGRESSBAR, payload: 0 });
  },

  resetAll: () => {
    dispatch({ type: ActionTypes.RESET_ALL, payload: init() });
  },
});

export function useReducerWithActionCreator(): [State, ActionCreator] {
  const [state, dispatch] = useReducer(reducer, init());
  return [state, actionCreator(dispatch)()];
}
