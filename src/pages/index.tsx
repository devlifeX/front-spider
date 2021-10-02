import * as React from "react";
import MainLayout from "../components/Layout";

import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>صفحه اصلی</title>
        <meta
          name="description"
          content="یه مشت ابزار باحال برای یه مشت باحال:)"
        />
      </Helmet>
      خوش اومدی، از منو ابزاری که میخای رو انتخاب کن
    </MainLayout>
  );
};

export default IndexPage;
