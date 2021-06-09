import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "~/components/Header";
import Menu from "~/components/Menu";
import { signIn, signOut, useSession } from "next-auth/client";
import SignIn from "~/pages/auth/signin";
import { useWrap } from "~/wrapper/wrap";
import TitlePageHeader from "./Elements/TitlePageHeader";
export const siteTitle = "Mona Media Admin";

const name = "Mona";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [session, loading] = useSession();
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const { titlePage } = useWrap();
  const funcMenuMobile = () => {
    !openMenuMobile ? setOpenMenuMobile(true) : setOpenMenuMobile(false);
  };

  const resetMenuMobile = () => {
    setOpenMenuMobile(false);
  };

  const isOpenMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleSignIn = (event: React.SyntheticEvent<any>) => signIn();
  useEffect(() => {}, []);

  return (
    <div className="app">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Mona Media Admin" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header
        isOpenMenu={isOpenMenu}
        isOpen={isOpen}
        funcMenuMobile={funcMenuMobile}
        openMenuMobile={openMenuMobile}
      />
      <Menu
        resetMenuMobile={resetMenuMobile}
        isOpenMenu={isOpenMenu}
        isOpen={isOpen}
        openMenuMobile={openMenuMobile}
        funcMenuMobile={funcMenuMobile}
      />
      <main className="app-main">
        <div className={`app-content ${!isOpen && "close"}`}>
          <div className="app-content-title">
            <TitlePageHeader title={titlePage} />
          </div>
          <div className="container-fluid">{children}</div>
        </div>
      </main>
    </div>
  );
}
