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
  );
}
