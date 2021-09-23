import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "fa",
      }}
    >
      <body dir="rtl" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};
export default SEO;
