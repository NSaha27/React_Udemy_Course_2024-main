import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ActiveTabContext from "./store/active-tab-context";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <ActiveTabContext.Provider value={{activeTab, setActiveTab}}>
        <Header />
        <Main />
      </ActiveTabContext.Provider>
    </>
  );
}

export default App;
