import "../styles/global.scss";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Dashboard from "~/pages/dashboard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout home>
      <Component {...pageProps} />;
    </Layout>
  );
}
