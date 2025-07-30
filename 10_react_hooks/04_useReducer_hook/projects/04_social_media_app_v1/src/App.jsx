import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ActiveTabContext from "./store/active-tab-context";
import LoginUserContext from "./store/login-user-context";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [loginSignupStatus, setLoginSignupStatus] = useState("login");
  const [loginUser, setLoginUser] = useState("");

  return (
    <>
      <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
          <Header setLoginSignupStatus={setLoginSignupStatus} />
          <Main loginSignupStatus={loginSignupStatus} />
        </LoginUserContext.Provider>
      </ActiveTabContext.Provider>
    </>
  );
}

export default App;
