import { createContext } from "react";

const UserContext = createContext({
  currentUserList: [],
  addUser: () => {},
  sendMail: () => {}
});

const ActiveUserContext = createContext({
  activeUser: null,
  changeActiveUser: () => {}
});

export { ActiveUserContext, UserContext };
