import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  console.log("Run auth");

  const [titlePage, setTitlePage] = useState("This is title");

  const getTitlePage = (title) => {
    console.log("run this");
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
