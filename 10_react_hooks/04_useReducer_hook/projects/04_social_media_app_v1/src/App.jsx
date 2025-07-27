import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ActiveTabContext from "./store/active-tab-context";
import LoginStatusContext from "./store/login-status-context";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [loginSignupStatus, setLoginSignupStatus] = useState("login");
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <>
      <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
        <LoginStatusContext.Provider value={{ loginStatus, setLoginStatus }}>
          <Header setLoginSignupStatus={setLoginSignupStatus} />
          <Main loginSignupStatus={loginSignupStatus} />
        </LoginStatusContext.Provider>
      </ActiveTabContext.Provider>
    </>
  );
}

export default App;
