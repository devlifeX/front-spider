import { SiteConfig } from "./types";

const config: SiteConfig = {
  // Website configuration
  website: {
    title: "Gatsby Advanced Starter", // Homepage title
    titleShort: "Advanced Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "Gatsby Advanced Starter", // Website name used for homescreen (PWA) and SEO
    description: "A GatsbyJS starter equipped with advanced features.", // Website description used for RSS feeds/meta description tag
    language: "en", // Sets the global HTML lang attribute
    logoUrl: "/logos/logo-1024.png", // Logo used for SEO
    url: "https://example.com", // Domain of your website without the pathPrefix

    copyright: "© Copyright 2021", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#D83850", // Used for setting manifest and progress theme colors.
    backgroundColor: "#f5f5f5", // Used for setting manifest background color.
  },

  // Gatsby Configuration
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels
  basePath: ".",
  backendURL:
    process.env.NODE_ENV === "production"
      ? "http://185.7.212.85:3000"
      : "http://localhost:3000",
};

export default config;
