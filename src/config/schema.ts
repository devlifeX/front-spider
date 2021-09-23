export const schema = `#graphql
  type WebsiteData {
    title: String!
    titleShort: String!
    name: String!
    description: String!
    language: String!
    logoUrl: String!
    twitterName: String
    url: String!
    copyright: String!
    rssTitle: String!
    googleAnalyticsId: String
    themeColor: String!
    backgroundColor: String!
  }
 
  type IconManifest {
    src: String!
    sizes: String!
    type: String!
    purpose: String
  }


  type  SiteConfig {
    website: WebsiteData!
    
    pathPrefix: String!

    contentDir: String
    assetDir: String

    embeddedImageWidth: Int!
    embeddedVideoWidth: Int!

    iconPath: String
    iconList: [IconManifest]!
    iconCachePaths: [String]

    basePath: String
  }

  type SiteSiteMetadata {
    config: SiteConfig!
  }
`;

export default schema;
