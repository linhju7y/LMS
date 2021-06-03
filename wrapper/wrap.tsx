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

const WrapContext = createContext<IProps>({
  titlePage: "",
  getTitlePage: () => {},
  getRouter: "",
});

export const WrapProvider = ({ children }) => {
  const [titlePage, setTitlePage] = useState("");
  const router = useRouter();
  const getRouter = router.pathname;

  const getTitlePage = (title) => {
    setTitlePage(title);
  };

  return (
    <>
      <WrapContext.Provider
        value={{
          titlePage: titlePage,
          getTitlePage,
          getRouter,
        }}
      >
        {children}
      </WrapContext.Provider>
    </>
  );
};

export const useWrap = () => useContext(WrapContext);
