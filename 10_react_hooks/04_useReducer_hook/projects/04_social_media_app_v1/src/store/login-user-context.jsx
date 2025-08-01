import { createContext, useState } from "react";

const LoginUserContext = createContext({
  loginUser: "",
  setLoginUser: () => {},
});

const LoginUserContextProvider = ({children}) => {
  const [loginUser, setLoginUser] = useState("");

  return <LoginUserContext.Provider value={{loginUser, setLoginUser}}>
    {children}
  </LoginUserContext.Provider>
}

export { LoginUserContext, LoginUserContextProvider };

