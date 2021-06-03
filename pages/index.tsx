import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import Dashboard from "~/pages/dashboard";
import { signIn, signOut, useSession } from "next-auth/client";
import SignIn from "./auth/signin";

export default function Home() {
  const [session, loading] = useSession();
  // if (!session?.user) {
  //   signIn();
  // }
  return (
    <>
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      <Dashboard />
    </>
  );
}
