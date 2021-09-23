// For gatsby-node.ts

export interface BasicFrontmatter {
  title?: string;
  slug?: string;
}

export type GatsbyFeedMdxQuery = {
  edges?: [
    {
      node: {
        excerpt?: string;
        html?: string;
        timeToRead?: string;
        fields?: {
          slug?: string;
        };
        frontmatter?: {
          title?: string;
          cover?: string;
          datePublished?: string;
          category?: string;
          tags?: string;
        };
      };
    }
  ];
};

export type GatsbyFeedConfig = {
  serialize: (data: GatsbyPluginFeedData) => Array<undefined> | undefined;
  query: string;
  output: string;
  title: string;
  site_url: string;
};

export type GatsbyPluginFeedData = {
  generator: string;
  feeds: Array<GatsbyFeedConfig>;
  plugins: [];
  output: string;
  title: string;
  site_url: string;
};
