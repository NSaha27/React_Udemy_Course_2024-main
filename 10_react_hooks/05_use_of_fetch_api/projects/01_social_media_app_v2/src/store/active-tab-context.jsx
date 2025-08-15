import { createContext, useState } from "react";

const ActiveTabContext = createContext({
  activeTab: "",
  changeActiveTab: () => {},
});

const ActiveTabContextProvider = ({children}) => {
  const [activeTab, setActiveTab] = useState("home");

  return <ActiveTabContext.Provider value={{activeTab, setActiveTab}}>
    {children}
  </ActiveTabContext.Provider>
}

export { ActiveTabContext, ActiveTabContextProvider };

