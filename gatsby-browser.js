import React from "react";
import { CacheProvider } from "@emotion/react";
import cacheRtl from "./src/theme/emotionCacheProps";

const cache = cacheRtl;

export const wrapRootElement = ({ element }) => {
  return <CacheProvider value={cache}>{element}</CacheProvider>;
};
