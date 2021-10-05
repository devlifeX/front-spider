import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      {/* <body dir="rtl" /> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        sizes="32x32"
        type="image/png"
        href="/images/favicon-32x32.png"
      />
    </Helmet>
  );
};
export default SEO;
