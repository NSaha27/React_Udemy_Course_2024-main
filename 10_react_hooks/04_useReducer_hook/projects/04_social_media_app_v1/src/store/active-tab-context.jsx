import { createContext } from "react";

const ActiveTabContext = createContext({
  activeTab: "",
  changeActiveTab: () => {},
});

export default ActiveTabContext;
