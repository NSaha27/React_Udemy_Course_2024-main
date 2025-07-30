import { createContext } from "react";

const LoginUserContext = createContext({
  loginUser: "",
  setLoginUser: () => {},
});

export default LoginUserContext;
