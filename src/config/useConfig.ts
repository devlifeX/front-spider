import { useStaticQuery, graphql } from "gatsby";
import { SiteConfig } from "./types";

type UserConfigQueryType = {
  site?: {
    siteMetadata?: {
      config?: SiteConfig;
    };
  };
};

const useConfig = (): SiteConfig => {
  const resp = useStaticQuery<UserConfigQueryType>(
    graphql`
      query UserConfig {
        site {
          siteMetadata {
            config {
              embeddedImageWidth
              embeddedVideoWidth
              pathPrefix
              website {
                backgroundColor
                copyright
                description
                language
                logoUrl
                name
                themeColor
                title
                titleShort
                url
              }
            }
          }
        }
      }
    `
  );

  const config = resp.site?.siteMetadata?.config;

  if (!config) throw Error("useConfig: Failed to query SiteConfig.");

  return config;
};

export default useConfig;
