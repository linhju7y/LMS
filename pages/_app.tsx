import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";
import "../styles/global.scss";

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Dashboard from "~/pages/dashboard";

import { AuthProvider } from "~/context/auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout home>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
