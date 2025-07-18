import { useState, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ActiveTabContext from "./store/active-tab-context";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <React.Fragment className="container-fluid">
      <ActiveTabContext.Provider value={{activeTab, setActiveTab}}>
        <Header />
        <Main />
      </ActiveTabContext.Provider>
    </React.Fragment>
  );
}

export default App;
