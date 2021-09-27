import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";

// declare module "stylis-plugin-rtl" {
// //   export default function rtlPlugin(): string | undefined;
// }

const cacheRtl = createCache({
  key: "x",
  stylisPlugins: [rtlPlugin],
});

export default cacheRtl;
