import isAbsoluteUrl from "is-absolute-url";
import { SiteConfig } from "./types";

// Validate
const validateSiteConfig = (config: SiteConfig): Readonly<SiteConfig> => {
  const newConfig = config;
  // Make sure pathPrefix is empty if not needed
  if (newConfig.pathPrefix === "/") {
    newConfig.pathPrefix = "";
  } else {
    // Make sure pathPrefix only contains the first forward slash
    newConfig.pathPrefix = `/${newConfig.pathPrefix.replace(/^\/|\/$/g, "")}`;
  }

  // Make sure website.url doesn't have an ending forward slash
  if (newConfig.website.url.substr(-1) === "/")
    newConfig.website.url = newConfig.website.url.slice(0, -1);

  // Make sure that website.url is an absolute URL
  if (!isAbsoluteUrl(newConfig.website.url)) {
    throw new Error("SiteConfig.website.url is not absolute.");
  }

  return newConfig;
};

export default validateSiteConfig;
