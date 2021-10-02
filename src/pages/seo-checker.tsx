import * as React from "react";
import MainLayout from "../components/Layout";

import { Helmet } from "react-helmet";

const SitemapExtractor = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>چک سئو سایت</title>
        <meta
          name="description"
          content="سایت‌ یا لینکهایی که میخای اطلاعات سئو فنی‌اش رو ببینی رو بهت میدم"
        />
      </Helmet>
      در دست ساخت
    </MainLayout>
  );
};

export default SitemapExtractor;
