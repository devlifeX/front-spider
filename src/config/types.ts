export interface WebsiteData {
  title: string;
  titleShort: string;
  name: string;
  description: string;
  language: string;
  logoUrl: string;
  url: string;
  copyright: string;
  themeColor: string;
  backgroundColor: string;
}

export interface SiteConfig {
  website: WebsiteData;

  pathPrefix: string;

  embeddedImageWidth: number;
  embeddedVideoWidth: number;
  basePath?: string;
}
