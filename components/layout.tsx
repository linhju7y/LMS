import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "~/components/Header";
import Menu from "~/components/Menu";

const name = "Mona";
export const siteTitle = "Mona Media Admin";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(true);

  console.log("isOpen: ", isOpen);

  const isOpenMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="app">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Mona Media Admin" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header isOpenMenu={isOpenMenu} isOpen={isOpen} />
      <Menu isOpenMenu={isOpenMenu} isOpen={isOpen} />
      <main className="app-main">
        <div className={`app-content ${!isOpen && "close"}`}>
          <div className="container-fluid">{children}</div>
        </div>
      </main>
    </div>
  );
}
