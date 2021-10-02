import path from "path";

import urljoin from "url-join";

import { GatsbyConfig } from "gatsby";

// Config
import { SiteConfig, withBasePath, withDefaults } from "../src/config";

// Make sure that pathPrefix is not empty

const gatsbyConfig = (userConfig: SiteConfig): GatsbyConfig => {
  // Merge user and default configurations
  const config = withDefaults(userConfig);

  const validatedPathPrefix =
    config.pathPrefix === "" ? "/" : config.pathPrefix;

  return {
    pathPrefix: validatedPathPrefix,
    siteMetadata: {
      config, // Make the merged configuration available via GraphQL
      siteUrl: urljoin(config.website.url, config.pathPrefix),
    },

    plugins: [
      {
        resolve: "gatsby-plugin-compile-es6-packages",
        options: {
          modules: ["gatsby-plugin-image"],
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /\.svg$/,
          },
        },
      },
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-lodash",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "assets",
          path: path.join(__dirname, "../static"),
        },
      },
      /* {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts",
          path: config.contentDir || path.join(__dirname, "../content"),
        },
      }, */
      {
        resolve: "gatsby-plugin-sharp",
        options: {
          defaults: {
            formats: ["auto", "webp", "avif"],
            placeholder: "blurred",
            backgroundColor: "transparent",
          },
          failOnError: true,
        },
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-image",
      "gatsby-remark-images",
      {
        resolve: "gatsby-plugin-google-gtag",
        options: {
          trackingIds: ["G-E9M62MNC6T"],
        },
      },
      {
        resolve: "gatsby-plugin-nprogress",
        options: {
          color: config.website.themeColor,
        },
      },
      "gatsby-plugin-catch-links",
      // "gatsby-plugin-twitter",
      "gatsby-plugin-sitemap",
      /*   {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: config.website.name,
          short_name: config.website.titleShort,
          description: config.website.description,
          start_url: validatedPathPrefix,
          background_color: config.website.backgroundColor,
          theme_color: config.website.themeColor,
          display: "minimal-ui",
          cache_busting_mode: "none",
          icon: config.iconPath,
          icons: config.iconList,
        },
      }, */
      /* {
        resolve: "gatsby-plugin-offline",
        options: {
          workboxConfig: {
            globPatterns: config.iconCachePaths,
          },
        },
      }, */

      /* {
        resolve: "gatsby-plugin-web-font-loader",
        options: {},
      }, */
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          pathToEmotionCacheProps: `src/theme/emotionCacheProps`,
        },
      },
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          displayName: false,
        },
      },
    ],
  };
};

export default gatsbyConfig;
