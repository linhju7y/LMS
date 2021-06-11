import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";
import "../styles/global.scss";
import React, { useEffect } from "react";

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Dashboard from "~/pages/dashboard";
import { Provider as AuthProvider } from "next-auth/client";
import { useRouter } from "next/router";
import { WrapProvider } from "~/wrapper/wrap";

import { signIn, signOut, useSession } from "next-auth/client";
import SignIn from "~/pages/auth/signin";

export default function App({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeError = (err, url) => {
      console.log("handleRouteChangeError", err);
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`);
      }
    };

    router.events.on("routeChangeError", handleRouteChangeError);
    return () => {
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return (
    <>
      <Head>
        <title>MONA LMS V2</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1"
        />

        <meta name="robots" content="noindex" />
        <link
          rel="stylesheet"
          href="https://www.amcharts.com/lib/3/plugins/export/export.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn3.devexpress.com/jslib/20.2.7/css/dx.common.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn3.devexpress.com/jslib/20.2.7/css/dx.light.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn3.devexpress.com/jslib/20.2.7/css/dx-gantt.min.css"
        />

        {/* <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script> */}
        <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
        <script src="https://www.amcharts.com/lib/3/serial.js"></script>
        <script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
        {/* <script src="path/to/chartjs/dist/chart.js"></script> */}
      </Head>
      <AuthProvider session={session}>
        <WrapProvider>
          {/* {!session ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )} */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WrapProvider>
      </AuthProvider>
    </>
  );
}
