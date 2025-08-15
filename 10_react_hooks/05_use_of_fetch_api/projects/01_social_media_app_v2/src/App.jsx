import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { ActiveTabContextProvider } from "./store/active-tab-context";
import { LoginUserContextProvider } from "./store/login-user-context";
import { UserContextProvider } from "./store/user-context";

function App() {
  const [loginSignupStatus, setLoginSignupStatus] = useState("login");

  return (
    <>
      <ActiveTabContextProvider>
        <UserContextProvider>
          <LoginUserContextProvider>
            <Header setLoginSignupStatus={setLoginSignupStatus} />
            <Main loginSignupStatus={loginSignupStatus} />
          </LoginUserContextProvider>
        </UserContextProvider>
      </ActiveTabContextProvider>
    </>
  );
}

export default App;
