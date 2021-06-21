import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "./layout";
import { signIn, useSession } from "next-auth/client";
import Lottie from "react-lottie";
import panda from "~/public/loading/panda.json";
import { useCookies } from "react-cookie";

const LayoutBase = ({ children }) => {
  const [session, loading] = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["token"]);

  if (session) {
    console.log("Session token: ", session.accessToken);
  }

  // Get path and slug
  const router = useRouter();
  const slug = router.query.slug;
  let path: string = router.pathname;
  let pathString: string[] = path.split("/");
  // ---------------------

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: panda,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (typeof session !== "undefined") {
      if (session == null) {
        // console.log("Test path: ", path.search("signin") < 0);
        if (path.search("signin") < 0) {
          signIn();
        }
      } else {
        setIsLoading(false);
        setCookie("token", session.accessToken);
      }
    }
  }, [session]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <Lottie options={defaultOptions} height="auto" width="60vw" />
        </div>
      ) : (
        <Layout>{children}</Layout>
      )}
      {/* {session && <Layout>{children}</Layout>} */}
    </>
  );
};

export default LayoutBase;
