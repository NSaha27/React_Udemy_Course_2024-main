import { createContext, useReducer } from "react";
import userHandleReducer from "../components/user-handle-reducer";

const UserContext = createContext({
  users: [],
  addUser: () => {},
  addInitialUsers: () => {},
  updateUser: () => {},
  deleteUser: () => {},
});

const UserContextProvider = ({ children }) => {
  const [users, userDispatcher] = useReducer(userHandleReducer, []);

  const addUser = (
    userId,
    name,
    gender,
    address,
    phone,
    email,
    password,
    education = [],
    jobs = []
  ) => {
    const addUserAction = {
      type: "ADD_USER",
      payload: {
        userId,
        name,
        gender,
        address,
        phone,
        email,
        password,
        education,
        jobs,
      },
    };
    userDispatcher(addUserAction);
  };
  const addInitialUsers = (userIds) => {
    const addInitialUserAction = {
      type: "ADD_INITIAL_USERS",
      payload: { userIds },
    };
    userDispatcher(addInitialUserAction);
  };
  const updateUser = (
    userId,
    name,
    gender,
    address,
    phone,
    email,
    password,
    education = [],
    jobs = []
  ) => {
    const updateUserAction = {
      type: "UPDATE_USER",
      payload: {
        userId,
        name,
        gender,
        address,
        phone,
        email,
        password,
        education,
        jobs,
      },
    };
    userDispatcher(updateUserAction);
  };
  const deleteUser = (userId) => {
    const deleteUserAction = {
      type: "DELETE_USER",
      payload: {
        userId,
      },
    };
    userDispatcher(deleteUserAction);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        addInitialUsers,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
