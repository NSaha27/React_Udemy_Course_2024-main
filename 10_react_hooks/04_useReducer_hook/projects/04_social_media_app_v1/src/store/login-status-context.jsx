import { createContext } from "react";

const LoginStatusContext = createContext({
  loginStatus: false,
  setLoginStatus: () => {},
});

export default LoginStatusContext;
