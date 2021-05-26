import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

export type IProps = {
  getTitlePage: any;
  titlePage: any;
};

const AuthContext = createContext<IProps>({
  titlePage: "",
  getTitlePage: () => {},
});

export const AuthProvider = ({ children }) => {
  console.log("Run auth");

  const [titlePage, setTitlePage] = useState("This is title");

  const getTitlePage = (title) => {
    console.log("run this: ", title);
    setTitlePage(title);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          titlePage: titlePage,
          getTitlePage,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
