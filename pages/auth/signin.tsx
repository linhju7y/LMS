import React, { useEffect } from "react";
import { providers, signIn, csrfToken, getProviders } from "next-auth/client";
import { useRouter } from "next/router";
import LoginForm from "~/components/LoginForm";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    if (router.query?.error) {
      const { error } = router.query;
      console.log("ERROR: ", error);
      const erData = JSON.parse(error.toString().split("Error:")[0]);

      console.log("Erdata: ", erData);

      switch (erData.status) {
        case 404:
          alert("Không truy cập được API");
          break;
        case 401:
          alert("Dữ liệu không hợp lệ");
          break;
        default:
          alert(JSON.stringify(erData));
          break;
      }
      router.replace("/", undefined, { shallow: true });
    }
    return () => {};
  }, []);
  const _Submit = (data) => {
    signIn("credentials-signin", {
      ...data,
      callbackUrl: router.query?.callbackUrl ?? "/",
    });
  };
  return (
    <>
      <LoginForm
        // key={provider.name}
        onSubmit={_Submit}
        // action="/api/auth/callback/credentials-signin"
        // csrfToken={csrfToken}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

// SignIn.getInitialProps = async (context) => {
//   return {
//     providers: await providers(context),
//     csrfToken: await csrfToken(context),
//   };
// };
