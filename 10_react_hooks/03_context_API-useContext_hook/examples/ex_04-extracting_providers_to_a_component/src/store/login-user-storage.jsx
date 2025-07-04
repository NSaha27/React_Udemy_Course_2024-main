import { createContext } from "react";

const LoginUserContext = createContext({
  username: "",
  password: "",
});

export default LoginUserContext;
