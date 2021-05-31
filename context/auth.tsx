import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useRouter } from "next/router";

export type IProps = {
  getTitlePage: any;
  titlePage: string;
  getRouter: any;
};

const AuthContext = createContext<IProps>({
  titlePage: "",
  getTitlePage: () => {},
  getRouter: "",
});

export const AuthProvider = ({ children }) => {
  const [titlePage, setTitlePage] = useState("");
  const router = useRouter();
  const getRouter = router.pathname;

  const getTitlePage = (title) => {
    setTitlePage(title);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          titlePage: titlePage,
          getTitlePage,
          getRouter,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
